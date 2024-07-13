import NavLink from './NavLink';

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-gray-100 border-b h-14 mt-4 mb-10 p-8">
      <div className="flex items-center space-x-2 text-sm">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/map">Map</NavLink>
        <NavLink to="/charts">Charts</NavLink>
      </div>
    </div>
  );
}
