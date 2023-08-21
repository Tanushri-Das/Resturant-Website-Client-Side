import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/" className="text-lg">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-lg">Contact Us</Link>
      </li>
      <li>
        <Link to="/menu" className="text-lg">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/order/salad" className="text-lg">
          Order Food
        </Link>
      </li>
      <li>
        <Link to="/secret" className="text-lg">
          Secret
        </Link>
      </li>
      <li>
        <Link to="/" className="text-lg">
          <button className="btn">
            <FaShoppingCart/>
            <div className="badge badge-secondary">0</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>{user?.displayName}</li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-outline-primary text-lg pt-2 ms-4"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="text-lg" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Header;
