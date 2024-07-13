
import StockComparisonChart from '../components/StockComparisonChart';
import type { StockSymbol } from '../api/types/stockSymbols';

export default function ChartPage() {
  const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  const chartType = 'scatter';
  return (
    <div>
      <StockComparisonChart symbols={symbols} chartType={chartType} />
    </div>
  );
}
