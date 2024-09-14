import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      {Array(5).fill(0).map((_, index) => (
        <div key={index} className="p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5 mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
