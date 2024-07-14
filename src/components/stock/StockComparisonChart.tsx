import { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Data } from 'plotly.js';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchStockData, selectStockData, selectLoading } from './stockSlice';
import { StockSymbol } from '../../api/types/stockSymbol';

interface StockComparisonChartProps {
  symbols: StockSymbol[];
  chartType: 'scatter' | 'bar' | 'box' | 'histogram';
}

function StockComparisonChart({ symbols, chartType }: StockComparisonChartProps) {
  const dispatch = useAppDispatch();
  const stockData = useAppSelector(selectStockData);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    symbols.forEach(symbol => {
      dispatch(fetchStockData(symbol));
    });
  }, [dispatch, symbols]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const plotData: Data[] = symbols.map(symbol => ({
    x: stockData[symbol]?.x || [],
    y: stockData[symbol]?.y || [],
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
