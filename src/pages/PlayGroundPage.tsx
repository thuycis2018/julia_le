
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import StockComparisonChart from '../components/stock/StockComparisonChart';
import type { StockSymbol } from '../api/types';
import PlayGroundSection  from '../components/PlayGroundSection';
import WCloud  from '../components/WordCloud';
import GitHubSection  from '../components/GitHubSection';
// import YelpBusinessList  from '../components/YelpBusinessList';
import Footer from '../components/Footer';

export default function PlayGroundPage() {
  const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  const chartType = 'scatter';

  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold text-center mx-auto m-6">My Playgrounds</h2>
      <PlayGroundSection />
      <GitHubSection /> 
    <div className="w-full max-w-3xl p-6 mb-6 bg-white rounded-2xl border border-gray-200 shadow-lg mx-auto hover:shadow-2xl transition-shadow duration-300">
        <h2 className="font-bold p-6 text-center"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> Using react-wordcloud to generate Word Cloud from provided text</h2>
        <WCloud />
      </div>
      <StockComparisonChart symbols={symbols} chartType={chartType} />
         
      {/* <YelpBusinessList location="San Francisco" term="coffee" /> */}
      <Footer />
    </div>
  );
}
