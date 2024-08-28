import React from 'react';

const Formv1: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="field1">
            Field 1:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="field1"
            name="field1"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="field2">
            Field 2:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="field2"
            name="field2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="field3">
            Field 3:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="field3"
            name="field3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="field4">
            Field 4:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="field4"
            name="field4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formv1;
