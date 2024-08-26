
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import StockComparisonChart from '../components/stock/StockComparisonChart';
import type { StockSymbol } from '../api/types/stockSymbol';
import PlayGroundSection  from '../components/PlayGroundSection';
import WCloud  from '../components/WordCloud';
import Footer from '../components/Footer';

export default function PlayGroundPage() {
  const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  const chartType = 'scatter';
  const wordCloudStyle: React.CSSProperties = {
    width: '90%',
    height: 'auto',
    maxWidth: '600px',
    border: '1px solid #666',
    margin: 'auto'
  };

  const h2Style: React.CSSProperties = {
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  return (
    <div>
      <PlayGroundSection />
      <div style={wordCloudStyle}>
        <h2 style={h2Style}><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> Using react-wordcloud to generate Word Cloud from provided text</h2>
        <WCloud />
      </div>
      <StockComparisonChart symbols={symbols} chartType={chartType} />     
      <Footer />
    </div>
  );
}
