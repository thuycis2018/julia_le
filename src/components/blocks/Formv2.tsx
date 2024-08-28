import React from 'react';

const Formv2: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form>
        <div className="mb-4 flex items-center">
          <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="field1">
            Field 1:
          </label>
          <input
            className="w-2/3 px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="field1"
            name="field1"
          />
        </div>
        
        <div className="mb-4 flex items-center">
          <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="field2">
            Field 2:
          </label>
          <input
            className="w-2/3 px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="field2"
            name="field2"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="field3">
            Field 3:
          </label>
          <input
            className="w-2/3 px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="field3"
            name="field3"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="field4">
            Field 4:
          </label>
          <input
            className="w-2/3 px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="field4"
            name="field4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formv2;
