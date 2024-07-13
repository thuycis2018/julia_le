import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Data } from 'plotly.js';
import type { StockSymbol } from '../api/types/stockSymbols';

interface StockData {
  x: string[];
  y: number[];
}

async function fetchStockData(symbol: StockSymbol): Promise<StockData> {
  // Mock data
  const data: { [key in StockSymbol]: StockData } = {
    AAPL: {
      x: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
      y: [226, 228, 225, 229, 230]
    },
    MSFT: {
      x: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
      y: [467, 444, 466, 451, 453]
    },
    GOOG: {
      x: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
      y: [191, 190, 192, 184, 186]
    },
    AMZN: {
      x: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
      y: [200, 199, 190, 191, 194]
    }
  };
  return data[symbol];
}

type ChartType = 'scatter' | 'bar' | 'box' | 'histogram';


interface StockComparisonChartProps {
  symbols: StockSymbol[];
  chartType: ChartType;
}

function StockComparisonChart({ symbols, chartType }: StockComparisonChartProps) {
  const [stockData, setStockData] = useState<{ [key in StockSymbol]?: StockData }>({});

  useEffect(() => {
    async function fetchData() {
      const dataPromises = symbols.map(symbol => fetchStockData(symbol));
      const data = await Promise.all(dataPromises);
      const dataMap = symbols.reduce((acc, symbol, index) => {
        acc[symbol] = data[index];
        return acc;
      }, {} as { [key in StockSymbol]?: StockData });

      setStockData(dataMap);
    }

    fetchData();
  }, [symbols]);

  if (symbols.some(symbol => !stockData[symbol])) {
    return <div>Loading...</div>;
  }

  const plotData: Data[] = symbols.map(symbol => ({
    x: stockData[symbol]!.x,
    y: stockData[symbol]!.y,
    type: chartType,
    mode: 'lines+markers',
    name: symbol,
    marker: { color: getRandomColor() },
  }));

  return (
    <div>
      <Plot
        data={plotData}
        layout={{
          title: 'Stock Prices Comparison',
          xaxis: {
            title: 'Date',
          },
          yaxis: {
            title: 'Stock Price (USD)',
          },
        }}
      />
    </div>
  );
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default StockComparisonChart;
