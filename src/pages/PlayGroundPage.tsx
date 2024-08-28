import React, { useState } from 'react';
import GitHubSection from '../components/GitHubSection';
import YelpBusinessList from '../components/YelpBusinessList';
import PlayGroundSection from '../components/PlayGroundSection';
import WordCloud from '../components/WordCloud';
import StockComparisonChart from '../components/stock/StockComparisonChart';
import type { StockSymbol } from '../api/types';
import Footer from '../components/Footer';

const PlayGroundPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  const chartType = 'scatter';
  const tabs = [
    { label: 'GraphQL', content: <YelpBusinessList location="San Diego" term="coffee"/> },
    { label: 'AWS Lambda', content: <GitHubSection /> },
    { label: 'TypeScript', content: <PlayGroundSection /> },
    { label: 'Word Cloud', content: <WordCloud /> },
    { label: 'Chart', content: <StockComparisonChart symbols={symbols} chartType={chartType} /> },
  ];

  return (
    <>
      <div className="w-full max-w-5xl mx-auto mt-10 rounded-b-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex bg-gray-200 rounded-t-lg">
          <ul className="flex">
            {tabs.map((tab, index) => (
              <li key={index} className="-mb-px">
                <button
                  className={`px-4 py-2 focus:outline-none border ${
                    activeTab === index
                      ? 'bg-white text-black font-semibold border-gray-300 border-b-transparent'
                      : 'bg-gray-200 text-gray-600 border-transparent'
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

