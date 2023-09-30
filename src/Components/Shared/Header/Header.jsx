// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
// import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../Hooks/useCart";
// import useAdmin from "../../../Hooks/useAdmin";

// const Header = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [cart] = useCart();
//   const [isAdmin]=useAdmin();
//   const handleLogout = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.error(error));
//   };
//   const navOptions = (
//     <>
//       <li className="flex justify-center">
//         <Link to="/" className="text-lg">
//           Home
//         </Link>
//       </li>
//       <li className="flex justify-center">
//         <Link className="text-lg">Contact Us</Link>
//       </li>
//       <li className="flex justify-center">
//         <Link to="/menu" className="text-lg">
//           Our Menu
//         </Link>
//       </li>
//       <li className="flex justify-center">
//         <Link to="/order/salad" className="text-lg">
//           Order Food
//         </Link>
//       </li>
//       {/* {isAdmin ? '/dashboard/adminhome' ? '/dashboard/userhome'} */}
//       {
//         isAdmin ? <li className="flex justify-center">
//         <Link to='/dashboard/adminhome' className="text-lg">
//           Dashboard
//         </Link>
//       </li> :
//       <li className="flex justify-center">
//       <Link to='/dashboard/userhome' className="text-lg">
//         Dashboard
//       </Link>
//     </li>
//       }

//       <li className="flex justify-center">
//         <Link to="/dashboard/mycart" className="text-lg">
//           <button className="btn">
//             <FaShoppingCart className="text-lg"/>
//             <div className="badge badge-secondary">{cart?.length || 0}</div>
//           </button>
//         </Link>
//       </li>
//       {user ? (
//         <>
//           <li className="flex justify-center text-lg">{user?.displayName}</li>
//           <li className="flex justify-center">
//             <button
//               onClick={handleLogout}
//               className="btn btn-outline-primary text-lg hover:text-white pt-2 ms-4"
//             >
//               Logout
//             </button>
//           </li>
//         </>
//       ) : (
//         <>
//           <li className="flex justify-center">
//             <Link className="btn btn-outline-primary text-lg hover:text-white" to="/login">
//               Login
//             </Link>
//           </li>
//         </>
//       )}
//     </>
//   );
//   return (
//     <>
//       <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {navOptions}
//             </ul>
//           </div>
//           <a className="btn btn-ghost normal-case text-xl">Foodie's Paradise</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <nav className="header-bg py-4 w-full fixed z-10 bg-opacity-30 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="mr-10 text-xl lg:text-3xl text-white font-mono font-bold flex-shrink-0">
          Foodie's Paradise
          </h1>
          <div className="flex items-center">
            <div className="hidden lg:block ml-auto">
              <div className="flex justify-center space-x-4">
                <a
                  href="/"
                  className="text-white px-3 py-2 rounded-md text-[15px] xl:text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="/menu"
                  className="text-white px-3 py-2 rounded-md text-[15px] xl:text-lg font-medium"
                >
                  Our Menu
                </a>
                {/* <a
                  href="/order/salad"
                  className="text-white px-3 py-2 rounded-md text-[15px] xl:text-lg font-medium"
                >
                  Order Food
                </a> */}
                <a
                  href="/order"
                  className="text-white px-3 py-2 rounded-md text-[15px] xl:text-lg font-medium"
                >
                  Order Food
                </a>
                {isAdmin ? (
                  <a
                    href="/dashboard/adminhome"
                    className="text-white px-3 py-2 rounded-md text-[15px] xl:text-lg font-medium"
                  >
                    Dashboard
                  </a>
                ) : (
                  <a
                    href="/dashboard/userhome"
                    className="text-white px-3 py-2 rounded-md text-[15px] xl:text-lg font-medium"
                  >
                    Dashboard
                  </a>
                )}
                <a
                  href="/contact-us"
                  className="text-white px-3 py-2 rounded-md text-[15px] xl:text-lg font-medium"
                >
                  Contact Us
                </a>
                {/* <li className="flex justify-center items-center relative">
                  <Link to="/dashboard/mycart" className="text-lg">
                    <button className="btn relative">
                      <FaShoppingCart className="text-lg" />
                      <div className=" absolute top-[-2px] right-[10px]">
                        <p className="text-lg">{cart?.length || 0}</p>
                      </div>
                    </button>
                  </Link>
                </li> */}

                {user ? (
                  <>
                    <li className="flex justify-center items-center text-[15px] xl:text-lg text-white ps-2">
                      {user?.displayName}
                    </li>
                    <li className="flex justify-center">
                      <button
                        onClick={handleLogout}
                        className="btn btn-outline-primary text-lg ms-3"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex justify-center">
                      <Link
                        className="btn btn-outline-primary text-lg hover:text-white"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <a
                onClick={toggleNavbar}
                href="#"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start">
            <a
              href="/"
              className="text-white px-3 py-2 rounded-md text-lg font-medium block"
            >
              Home
            </a>

            <a
              href="/menu"
              className="text-white px-3 py-2 rounded-md text-lg font-medium block"
            >
              Our Menu
            </a>
            <a
              href="/order/salad"
              className="text-white px-3 py-2 rounded-md text-lg font-medium block"
            >
              Order Food
            </a>
            {isAdmin ? (
              <a
                href="/dashboard/adminhome"
                className="text-white px-3 py-2 rounded-md text-lg font-medium block"
              >
                Dashboard
              </a>
            ) : (
              <a
                href="/dashboard/userhome"
                className="text-white px-3 py-2 rounded-md text-lg font-medium block"
              >
                Dashboard
              </a>
            )}

            <li className="lg:flex justify-center items-center relative px-3 pt-4">
              <Link to="/dashboard/mycart" className="text-lg">
                <button className="btn relative">
                  <FaShoppingCart className="text-lg" />
                  <div className=" absolute top-[-2px] right-[10px]">
                    <p className="text-lg">{cart?.length || 0}</p>
                  </div>
                </button>
              </Link>
            </li>
            <a
              href="/contact-us"
              className="text-white px-3 py-2 rounded-md text-lg font-medium block"
            >
              Contact Us
            </a>
            {user ? (
              <>
                <li className="lg:flex justify-center items-center text-lg text-white ps-2 pt-5">
                  {user?.displayName}
                </li>
                <li className="lg:flex justify-center pt-5">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-primary text-lg ms-3"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="flex justify-center">
                  <Link
                    className="btn btn-outline-primary text-lg hover:text-white"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
