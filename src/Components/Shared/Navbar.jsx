import React, { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <nav className="bg-dark border-gray-200 px-4 w-screen sm:px-4 py-4">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/home" className="flex items-center text-white">
          <span className="self-center text-3xl font-semibold whitespace-nowrap">
            eBanky
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-dark">
            <li>
              <Link
                to="/home"
                className="block py-2 pr-4 pl-3 text-white bg-dark rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                type="button"
                className="flex items-center justify-center gap-2 py-2 pr-4 pl-3 text-white bg-dark rounded md:bg-transparent md:p-0"
              >
                Logout
                <HiOutlineLogout className="text-xl" />
              </button>
            </li>
          </ul>
        </div>
        {expanded && (
          <div className="block w-full md:hidden md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 border">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pr-4 pl-3 text-white bg-dark md:bg-transparent text-center hover:bg-gray-600"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  type="button"
                  className="flex items-center justify-center gap-2 py-2 pr-4 pl-3 text-white bg-dark md:bg-transparent text-center w-full hover:bg-gray-600"
                >
                  Logout
                  <HiOutlineLogout className="text-xl" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
