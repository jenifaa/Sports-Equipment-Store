import React, { useEffect, useState } from "react";
import logo from '../../assets/games.png'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="bg-[#5C4E4E] text-white">
      <nav className="flex justify-between items-center px-8 py-7">
        <div className="">
          <Link className="font font-extrabold text-4xl flex gap-2">
          <img className="w-12 h-12" src={logo} alt="" />
            SportZone
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink
           to="/"
            className="hover:text-[#A67C52] hover:font-bold hover:text-xl flex items-center space-x-2"
          >
            Home
          </NavLink>
          <NavLink  className="hover:text-[#A67C52] hover:font-bold hover:text-xl ">
            All Sports Equipments
          </NavLink>
          <NavLink to="/add" className="hover:text-[#A67C52] hover:font-bold hover:text-xl ">
            Add Equipment
          </NavLink>
          <NavLink href="#" className="hover:text-[#A67C52] hover:font-bold hover:text-xl ">
            My Equipment List
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* <button className="btn" onClick={handleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button> */}

       
        <div className="flex items-center gap-5">
        <input
         onClick={handleTheme}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
          <button className="px-4 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md">
            Login
          </button>
          <button className="px-3 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md">
            Register
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-[#38EF7D] md:hidden">
          <NavLink href="#" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink href="#" className="hover:text-gray-200">
            All Sports Equipments
          </NavLink>
          <NavLink href="#" className="hover:text-gray-200">
            Add Equipment
          </NavLink>
          <NavLink href="#" className="hover:text-gray-200">
            My Equipment List
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
