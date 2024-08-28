import React, { useState } from 'react';

const MegaMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-lg font-bold">Mega Menu</div>
            <div className="hidden md:flex space-x-4 ml-10">
              <div className="relative group">
                <button
                  className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  onClick={toggleMenu}
                >
                  Products
                </button>
                {menuOpen && (
                  <div className="absolute left-0 top-full mt-2 w-screen max-w-md bg-white text-gray-800 rounded-lg shadow-lg group-hover:block">
                    <div className="p-4 grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">Category 1</h3>
                        <ul>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Product 1</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Product 2</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Product 3</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Category 2</h3>
                        <ul>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Product 4</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Product 5</a></li>
                          <li><a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Product 6</a></li>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MegaMenu;
