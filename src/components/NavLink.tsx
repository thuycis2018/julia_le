import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    children: ReactNode;
  }

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className="border rounded outline p-2 m-2 text-lg font-bold hover:bg-white">
      {children}
    </Link>
  );
};

export default NavLink;
