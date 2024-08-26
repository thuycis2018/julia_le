
import StockComparisonChart from '../components/stock/StockComparisonChart';
import type { StockSymbol } from '../api/types/stockSymbol';
import PlayGroundSection  from '../components/PlayGroundSection';
import WCloud  from '../components/WordCloud';
import Footer from '../components/Footer';

export default function PlayGroundPage() {
  const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  const chartType = 'scatter';
  return (
    <div>
      <PlayGroundSection />
      <WCloud />
      <StockComparisonChart symbols={symbols} chartType={chartType} />     
      <Footer />
    </div>
  );
}
