import { Link } from "react-router-dom";

const NavBar = () => {
  const navItems = ["HOME", "MENU", "MAKE A RESERVATION", "CONTACT US"];

  return (
    <div className="navbar bg-black text-white shadow-sm w-full h-20 px-5">
      {/* Logo */}
      <div className="flex-1 px-9 mt-9">
  <Link to="/" className="text-xl font-bold ">
    <div className="flex items-start">
      <div className="flex flex-col leading-tight mr-1">
        <span className="text-blue-500">DEEP</span>
        <span className="text-gray-400">SOFT</span>
      </div>
      <span className="text-white">NET</span>
    </div>
  </Link>
</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2">
          {navItems.map((item) => (
           <li key={item}>
           <Link to={'/'}
             className="font-semibold text-white hover:text-blue-500 transition-colors duration-200 pt-9"
           >
             {item}
           </Link>
         </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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

      {/* Add Items Button */}
      <Link to="/addmenu" className="ml-4">
        <button className="btn btn-success hover:bg-green-600 transition-colors">
          Add Items
        </button>
      </Link>
    </div>
  );
};

export default NavBar;