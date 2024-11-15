import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faComments,
  faCode,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='font-sans sticky top-0 z-[99]'>
      <nav className='bg-brown-1 text-white p-4 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
          <a href='/' className='text-xl font-bold'>
            Thuy Le
          </a>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none'
            >
              <FontAwesomeIcon icon={faBars} size='lg' />
            </button>
          </div>
          <div
            className={`flex-col md:flex md:flex-row md:items-center ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <NavLink
              to='/'
              className={({ isActive }) =>
                `mt-4 md:mt-0 md:ml-10 p-2 ${
                  isActive ? "font-bold border border-white-100 rounded-lg" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faHouse} className='mr-2' /> Home
            </NavLink>
            <NavLink
              to='/testimonials'
              className={({ isActive }) =>
                `mt-4 md:mt-0 md:ml-10 p-2 ${
                  isActive
                    ? "font-bold  border border-white-100  rounded-lg"
                    : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faComments} className='mr-2' />{" "}
              Testimonials
            </NavLink>
            <NavLink
              to='/portfolio'
              className={({ isActive }) =>
                `mt-4 md:mt-0 md:ml-10 p-2 ${
                  isActive
                    ? "font-bold  border border-white-100  rounded-lg"
                    : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faCode} className='mr-2' /> Portfolio
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
