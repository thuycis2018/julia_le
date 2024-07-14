
import StockComparisonChart from '../components/stock/StockComparisonChart';
import type { StockSymbol } from '../api/types/stockSymbol';

export default function ChartPage() {
  const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  const chartType = 'scatter';
  return (
    <div>
      <StockComparisonChart symbols={symbols} chartType={chartType} />
    </div>
  );
}
