import React, { useState, Suspense } from 'react';
//import type { StockSymbol } from '../api/types';
import Footer from '../components/Footer';
//import GitHubSection from '../components/GitHubSection';
//import DatoTestimonials from '../components/DatoTestimonials';
import PlaygroundList from '../components/PlaygroundList';
//import WordCloud from '../components/WordCloud';
import Skeleton from '../components/Skeleton';

// const YelpBusinessList = React.lazy(() => import('../components/YelpBusinessList'));
//const StockComparisonChart = React.lazy(() => import('../components/stock/StockComparisonChart'));
const GitHubSection = React.lazy(() => import('../components/GitHubSection'));
const DatoTestimonials = React.lazy(() => import('../components/DatoTestimonials'));
//const WordCloud = React.lazy(() => import('../components/WordCloud'));

const PlayGroundPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  // const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  // const chartType = 'scatter';
  const tabs = [
    { label: 'Web Sites', content: <PlaygroundList /> }, 
    //{ label: 'Word Cloud', content: <div><Suspense fallback={<div>Loading ....</div>}><WordCloud /></Suspense></div> },
    { label: 'GitHub Search', content: <div><Suspense fallback={<Skeleton />}><GitHubSection /></Suspense></div> }, 
    { label: 'DatoCMS', content: <div><Suspense fallback={<Skeleton />}><DatoTestimonials /></Suspense></div> }, 
  //  { label: 'Yelp List', content: <div><Suspense fallback={<Skeleton />}><YelpBusinessList location="San Diego" term="whiskey"/></Suspense></div> },
  //   { label: 'Chart', content: <div><Suspense fallback={<div>Loading ....</div>}><StockComparisonChart symbols={symbols} chartType={chartType} /> </Suspense></div>},
  ];

  return (
    <>
      <div className="w-full max-w-5xl mx-auto p-4 mt-10 rounded-b-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex bg-green-5 rounded-t-lg">
          <ul className="flex">
            {tabs.map((tab, index) => (
              <li key={index} className="-mb-px">
                <button
                  className={`px-4 py-2 focus:outline-none ${
                    activeTab === index
                      ? 'bg-brown-1 text-white font-semibold border-brown-1 border-b-transparent'
                      : 'bg-green-5 text-white font-semibold'
                  } ${
                    index === 0
                      ? 'rounded-tl-lg'
                      : index === tabs.length - 1
                      ? 'rounded-tr-lg'
                      : ''
                  }`}
                  onClick={() => setActiveTab(index)}
                  style={{ minHeight: '4.5rem' }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 bg-white rounded-b-lg border-t-0">
          {tabs[activeTab].content}
        </div>

      </div>
      <Footer />
    </>
  );
};

export default PlayGroundPage;

