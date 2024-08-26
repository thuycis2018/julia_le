import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    children: ReactNode;
}

export default function NavLink ({ to, children }: NavLinkProps) {
  return (
    <Link to={to} className="px-4 py-2 hover:bg-grey-300">
      {children}
    </Link>
  );
}
