import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBolt, faComments, faCode, faBars, faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans bg-green-1">
      <nav className="bg-brown-1 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            <FontAwesomeIcon icon={faBolt} className="mr-2" /> Julia Le
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
          <div className={`flex-col md:flex md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'}`}>
            <NavLink to="/" className="mt-4 md:mt-0 md:ml-10">
              <FontAwesomeIcon icon={faHouse} className="mr-2" /> Home
            </NavLink>
            <NavLink to="/case-studies" className="mt-4 md:mt-0 md:ml-10">
              <FontAwesomeIcon icon={faLaptopFile} className="mr-2" /> Case Study
            </NavLink>
            <NavLink to="/testimonials" className="mt-4 md:mt-0 md:ml-10">
              <FontAwesomeIcon icon={faComments} className="mr-2" /> Testimonials
            </NavLink>
            <NavLink to="/playgrounds" className="mt-4 md:mt-0 md:ml-10">
              <FontAwesomeIcon icon={faCode} className="mr-2" /> Playgrounds
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
