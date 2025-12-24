import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors
     ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`;

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          <div className="flex items-center gap-2 -ml-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md text-white">
             <img src="logo.svg" className="h-full w-full object-contain"/>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              Kewang
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/expenses" className={linkClass}>
              Expense Tracker
            </NavLink>
            <NavLink to="/weather" className={linkClass}>
              Weather App
            </NavLink>
          </nav>
          <button type="button" onClick={() => setIsMenuOpen(prev => !prev)} 
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 border rounded"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
            aria-expanded={isMenuOpen}>
            <span className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
  
            <span className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
            }`}></span>
  
            <span className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
            </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <NavLink to="/" className={linkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/expenses" className={linkClass} onClick={() => setIsMenuOpen(false)}>Expense Tracker</NavLink>
            <NavLink to="/weather" className={linkClass} onClick={() => setIsMenuOpen(false)}>Weather App</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
