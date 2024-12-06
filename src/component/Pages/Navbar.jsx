import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/games.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Main/AuthProvider";

const Navbar = () => {
  const { user, setUser, logOut, updateUserProfile, loading } =
    useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="bg-[#5C4E4E] text-white">
      <nav className="flex justify-between items-center md:px-8 py-7">
        <div className="">
          <Link className="font font-extrabold text-2xl md:text-4xl flex items-center gap-2">
            <img className="w-12 h-12" src={logo} alt="" />
            SportZone
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6">
          <NavLink
            to="/"
            className="hover:text-[#A67C52] hover:font-bold hover:text-xl flex items-center space-x-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/all"
            className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
          >
            All Sports Equipments
          </NavLink>
          {user && user?.email ? (
            <>
              <NavLink
                to="/add"
                className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
              >
                Add Equipment
              </NavLink>
            </>
          ) : (
            ""
          )}
          <NavLink
            to="/list"
            className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
          >
            My Equipment List
          </NavLink>
        </div>

        <div className="lg:hidden">
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

        <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-5">
          {isHomepage && (
            <input
              onClick={handleTheme}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
          )}
        

          {user && user?.email ? (
            <>
              <NavLink>
                <button onClick={logOut} className="px-4 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md">
                  LogOut
                </button>
              </NavLink>
              <NavLink to="/update">
                <button className="px-3 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md">
                  Update
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <button className="px-4 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="px-3 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-[#071f10] lg:hidden">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/all" className="hover:text-gray-200">
            All Sports Equipments
          </NavLink>
          {user && user?.email ? (
            <>
              <NavLink
                to="/add"
                className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
              >
                Add Equipment
              </NavLink>
            </>
          ) : (
            ""
          )}
          <NavLink to="/list" className="hover:text-gray-200">
            My Equipment List
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
