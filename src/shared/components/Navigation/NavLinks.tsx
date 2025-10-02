import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const NavLinks: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="list-none m-0 p-0 w-full h-full flex flex-col md:flex-row justify-center items-center">
      <li className="m-4 md:m-0 md:mx-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `border border-transparent text-gray-800 md:text-white no-underline p-2 hover:bg-yellow-400 hover:border-gray-800 hover:text-gray-800 transition-colors ${
              isActive ? "bg-yellow-400 border-gray-800 text-gray-800" : ""
            }`
          }
        >
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li className="m-4 md:m-0 md:mx-2">
          <NavLink
            to="/u1/places"
            className={({ isActive }) =>
              `border border-transparent text-gray-800 md:text-white no-underline p-2 hover:bg-yellow-400 hover:border-gray-800 hover:text-gray-800 transition-colors ${
                isActive ? "bg-yellow-400 border-gray-800 text-gray-800" : ""
              }`
            }
          >
            MY PLACES
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className="m-4 md:m-0 md:mx-2">
          <NavLink
            to="/places/new"
            className={({ isActive }) =>
              `border border-transparent text-gray-800 md:text-white no-underline p-2 hover:bg-yellow-400 hover:border-gray-800 hover:text-gray-800 transition-colors ${
                isActive ? "bg-yellow-400 border-gray-800 text-gray-800" : ""
              }`
            }
          >
            ADD PLACE
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li className="m-4 md:m-0 md:mx-2">
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              `border border-transparent text-gray-800 md:text-white no-underline p-2 hover:bg-yellow-400 hover:border-gray-800 hover:text-gray-800 transition-colors ${
                isActive ? "bg-yellow-400 border-gray-800 text-gray-800" : ""
              }`
            }
          >
            AUTHENTICATE
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className="m-4 md:m-0 md:mx-2">
          <button
            onClick={auth.logout}
            className="cursor-pointer border border-gray-800 md:border-white text-gray-800 md:text-white bg-transparent p-2 font-inherit hover:bg-gray-800 md:hover:bg-yellow-400 hover:text-white md:hover:text-gray-800 transition-colors focus:outline-none"
          >
            LOGOUT
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
