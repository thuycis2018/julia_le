import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faComments, faCode, faBars, faFolder } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans">
      <nav className="bg-brown-1 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            Julia Le
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
          <div className={`flex-col md:flex md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'}`}>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `mt-4 md:mt-0 md:ml-10 ${isActive ? 'font-bold' : ''}`
              }
            >
              <FontAwesomeIcon icon={faHouse} className="mr-2" /> Home
            </NavLink>
            <NavLink 
              to="/case-studies" 
              className={({ isActive }) =>
                `mt-4 md:mt-0 md:ml-10 ${isActive ? 'font-bold' : ''}`
              }
            >
              <FontAwesomeIcon icon={faFolder} className="mr-2" /> Case Study
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) =>
                `mt-4 md:mt-0 md:ml-10 ${isActive ? 'font-bold' : ''}`
              }
            >
              <FontAwesomeIcon icon={faComments} className="mr-2" /> Testimonials
            </NavLink>
            <NavLink 
              to="/playgrounds" 
              className={({ isActive }) =>
                `mt-4 md:mt-0 md:ml-10 ${isActive ? 'font-bold' : ''}`
              }
            >
              <FontAwesomeIcon icon={faCode} className="mr-2" /> Playground
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
