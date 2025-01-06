import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/icons/games.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Main/AuthProvider";
import Loading from "./Loading";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const { user, setUser, logOut, updateUserProfile, loading } =
    useContext(AuthContext);
  const links = (
    <>
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
        All Equipments
      </NavLink>
      <NavLink
        to="/about"
        className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
      >
        Contact Us
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
      {user && user?.email ? (
        <>
          <NavLink
            to="/list"
            className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
          >
            My Equipment List
          </NavLink>
        </>
      ) : (
        ""
      )}
      <NavLink
        to="/blog"
        className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
      >
        Our Blog
      </NavLink>
    </>
  );

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
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#5C4E4E] text-white fixed top-0 w-full z-50 transition-all px-4 duration-500">
      <nav className="flex justify-between items-center px-3 md:px-10 py-3">
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
        <div className="">
          <Link
            to="/"
            className="font font-extrabold text-2xl md:text-3xl flex items-center gap-2"
          >
            <img className="w-14 h-14" src={logo} alt="" />
            SportZone
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6">{links}</div>

       

        <div className="flex md:flex-row flex-col items-center gap-2 lg:gap-5">
          {isHomepage && (
          
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onClick={handleTheme}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
               
                 
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          )}
          {user && user?.photoURL ? (
            <img
              src={user?.photoURL}
              title={user?.displayName || "User"}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full md:flex"
            ></img>
          ) : (
            <BsPersonCircle className="text-5xl" />
          )}

          {user && user?.email ? (
            <div>
              <NavLink>
                <button
                  onClick={logOut}
                  className=" text-white text-lg border-white border-2 px-5 py-2 rounded-md"
                >
                  LogOut
                </button>
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button  className=" text-white text-lg border-white border-2 px-4 py-1 rounded-md">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button  className=" text-white text-lg border-white border-2 px-4 py-1 rounded-md">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col  space-y-4 px-6 py-4 bg-[#071f10] lg:hidden">{links}</div>
      )}
    </div>
  );
};

export default Navbar;
