import React, { useState } from 'react';

// Example components to be used as tab content
const TabContent1: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold">Tab 1 Content</h2>
    <p>This is the content of Tab 1.</p>
  </div>
);

const TabContent2: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold">Tab 2 Content</h2>
    <p>This is the content of Tab 2.</p>
  </div>
);

const TabContent3: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold">Tab 3 Content</h2>
    <p>This is the content of Tab 3.</p>
  </div>
);

const TabsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Tab 1 ABC DDD', content: <TabContent1 /> },
    { label: 'Tab 2 AAA', content: <TabContent2 /> },
    { label: 'Tab 3', content: <TabContent3 /> },
  ];

//   return (
//     <div className="w-full max-w-md mx-auto mt-10 rounded-b-lg shadow-lg">
//       <div className="flex bg-gray-200 rounded-t-lg">
//         <ul className="flex">
//           {tabs.map((tab, index) => (
//             <li key={index} className="-mb-px">
//               <button
//                 className={`px-4 py-2 focus:outline-none border ${
//                   activeTab === index
//                     ? 'bg-white text-black font-semibold border-gray-300 border-b-transparent'
//                     : 'bg-gray-200 text-gray-600 border-transparent'
//                 } ${
//                   index === 0
//                     ? 'rounded-t-lg'
//                     : index === tabs.length - 1
//                     ? 'rounded-t-lg'
//                     : ''
//                 }`}
//                 onClick={() => setActiveTab(index)}
//               >
//                 {tab.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="p-10 bg-white rounded-b-lg border-t-0">
//         {tabs[activeTab].content}
//       </div>
//     </div>
//   );
// };

return (
  <div className="w-full max-w-md mx-auto mt-10 rounded-b-lg shadow-lg">
    <div className="flex bg-gray-200 rounded-t-lg">
      <ul className="flex w-full">
        {tabs.map((tab, index) => (
          <li key={index} className="flex-1 -mb-px">
            <button
              className={`w-full px-4 py-2 focus:outline-none border ${
                activeTab === index
                  ? 'bg-white text-black font-semibold border-gray-300 border-b-transparent'
                  : 'bg-gray-200 text-gray-600 border-transparent'
              } ${
                index === 0
                  ? 'rounded-t-lg'
                  : index === tabs.length - 1
                  ? 'rounded-t-lg'
                  : ''
              } md:bg-gray-200 md:text-gray-600 md:border-transparent md:hover:bg-white md:hover:text-black`}
              onClick={() => setActiveTab(index)}
              style={{ minHeight: '4.5rem' }} // Ensures consistent height
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
);

};
export default TabsComponent;
