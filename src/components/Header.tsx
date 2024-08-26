import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBolt, faComments, faCode } from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink';

export default function Header() {
  return (
    <div className="font-sans bg-gray-100">
      <nav className="bg-gray-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold"><FontAwesomeIcon  icon={faBolt} className="mr-2" /> Julia Le</a>
          <div>
            <FontAwesomeIcon  icon={faHouse} className="ml-10" /> <NavLink to="/">Home</NavLink>
            <FontAwesomeIcon  icon={faComments} className="ml-10" /> <NavLink to="/testimonials">Testimonials</NavLink>
            <FontAwesomeIcon  icon={faCode} className="ml-10" /> <NavLink to="/playgrounds">Playgrounds</NavLink>
          </div>
        </div>
      </nav>
    </div>

    
  );
}
