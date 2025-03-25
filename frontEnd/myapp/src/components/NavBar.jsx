import { Link } from "react-router-dom";

const NavBar = () => {
  const navItems = ["HOME", "MENU", "MAKE A RESERVATION", "CONTACT US"];

  return (
    <div className="navbar bg-black text-white shadow-sm w-full h-20 px-4 sm:px-5">
      {/* Logo */}
      <div className="flex-1 px-2 sm:px-9 mt-9">
        <Link to="/" className="text-xl font-bold">
          <div className="flex items-start">
            <div className="flex flex-col leading-tight mr-1">
              <span className="text-blue-500">DEEP</span>
              <span className="text-gray-400">SOFT</span>
            </div>
            <span className="text-white">NET</span>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation and Add Items Button */}
      <div className="flex items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal gap-2">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={'/'}
                  className="font-semibold text-white hover:text-blue-500 transition-colors duration-200 pt-9"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Items Button - Moved inside this flex container */}
        <Link to="/addmenu" className="ml-2 sm:ml-4">
          <button className="btn btn-success hover:bg-green-600 transition-colors text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4">
            Add Items
          </button>
        </Link>

        {/* Mobile Dropdown */}
        <div className="md:hidden ml-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 border border-gray-700"
            >
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white hover:text-blue-500 hover:bg-green-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;