
import StockComparisonChart from '../components/stock/StockComparisonChart';
import type { StockSymbol } from '../api/types/stockSymbol';
import WCloud  from '../components/WordCloud';

export default function PlayGroundPage() {
  const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  const chartType = 'scatter';
  return (
    <div>
      <div className="font-bold mb-8 text-center p-10">Project: Using react @apollo/client to consume GitHub GraphQL endpoints: <a href="https://graphql-github.pages.dev/" target="_blank" title="Open Cloudflare page">[Github GraphQL]</a></div>
      <StockComparisonChart symbols={symbols} chartType={chartType} />
      <WCloud />
    </div>
  );
}
