import React, { useState } from 'react';

const MegaMenuv2: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-lg font-bold">MySite</div>
            <div className="hidden md:flex space-x-4 ml-10 relative">
              <div className="relative">
                <button
                  className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  onClick={toggleMenu}
                >
                  Products
                </button>
                {menuOpen && (
                  <div className="absolute inset-x-0 top-full mt-2 bg-gray-800 text-white rounded-b-lg shadow-lg z-50">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Category 1</h3>
                        <ul>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 1</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 2</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 3</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Category 2</h3>
                        <ul>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 4</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 5</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 6</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Category 3</h3>
                        <ul>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 7</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 8</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 9</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Category 4</h3>
                        <ul>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 10</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 11</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-700 rounded">Product 12</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 text-white">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MegaMenuv2;
