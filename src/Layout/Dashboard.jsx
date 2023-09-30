// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import {
//   FaShoppingCart,
//   FaWallet,
//   FaCalendar,
//   FaSwatchbook,
//   FaBars,
//   FaShoppingBag,
//   FaUtensils,
//   FaListUl,
//   FaBook,
//   FaUsers,
// } from "react-icons/fa";
// import {MdReviews} from 'react-icons/md'
// import { AiFillHome } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
// import "./Dashboard.css";
// import useCart from "../Hooks/useCart";
// import useAdmin from "../Hooks/useAdmin";

// const Dashboard = () => {
//   const [cart] = useCart();
//   // TODO:load data from the server to ahve dynamci isAdmin based on rule
//   // const isAdmin = true;
//   const [isAdmin]=useAdmin();

//   return (
//     <div className="drawer lg:drawer-open border border-red-500">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col items-center">
//         {/* Page content here */}
//         <Outlet />
//         <label
//           htmlFor="my-drawer-2"
//           className="btn btn-primary drawer-button lg:hidden"
//         >
//           Open drawer
//         </label>
//       </div>
//       <div className="drawer-side">
//         <label htmlFor="my-drawer-2" style={{marginTop:'0'}} className="drawer-overlay"></label>
//         <ul className="menu p-4 w-80 h-full dashboard-sidebar  text-base-content">
//           {/* Sidebar content here */}
//           {isAdmin ? (
//             <>
//               <li>
//                 <NavLink
//                   to="/dashboard/adminhome"
//                   activeClassName="active-link text-white"
//                   className="uppercase"
//                 >
//                   <AiFillHome className="text-lg" />
//                   Admin Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/addItem"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaUtensils className="text-lg" />
//                   add items
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/manageItems"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaListUl className="text-lg" />
//                   manage items
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/history"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaBook className="text-lg" />
//                   Manage bookings
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/allusers"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaUsers className="text-lg" />
//                   all users
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink
//                   to="/dashboard/userhome"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <AiFillHome className="text-lg" />
//                   User Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/payment"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaCalendar className="text-lg" />
//                   Reservation
//                 </NavLink>
//               </li>
//               <li className="flex">
//                 <NavLink
//                   to="/dashboard/mycart"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaShoppingCart className="text-lg" />
//                   My Cart
//                   <span className="badge badge-secondary rounded-full">
//                     {cart?.length || 0}
//                   </span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/paymenthistory"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaWallet className="text-lg" />
//                   Payment History
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/my-booking"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaSwatchbook className="text-lg" />
//                   My Booking
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/addreview"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <MdReviews className="text-lg"/>
//                   add review
//                 </NavLink>
//               </li>

//             </>
//           )}

//           <div className="divider"></div>
//           <li>
//             <NavLink to="/" activeClassName="active-link" className="uppercase">
//               <AiFillHome className="text-lg" />
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/menu" activeClassName="active-link">
//               <FaBars className="text-lg" /> Our Menu
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/order/salad" activeClassName="active-link">
//               <FaShoppingBag className="text-lg" /> Order Food
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               activeClassName="active-link"
//               className="uppercase"
//             >
//               <MdEmail className="text-lg" />
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdEmail, MdOutlineDashboard } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
// import { TbReportAnalytics } from "react-icons/tb";
// import { AiOutlineUser, AiOutlineHeart, AiFillHome } from "react-icons/ai";
// import {
//   FaShoppingCart,
//   FaWallet,
//   FaCalendar,
//   FaSwatchbook,
//   FaBars,
//   FaShoppingBag,
//   FaUtensils,
//   FaListUl,
//   FaBook,
//   FaUsers,
// } from "react-icons/fa";
// import { Link, NavLink, Outlet } from "react-router-dom";
// import useCart from "../Hooks/useCart";
// import useAdmin from "../Hooks/useAdmin";
// import {MdReviews} from 'react-icons/md'

// const Dashboard = () => {
//   const [cart] = useCart();
//   // TODO:load data from the server to ahve dynamci isAdmin based on rule
//   // const isAdmin = true;
//   const [isAdmin]=useAdmin();

//   const [open, setOpen] = useState(true);
//   return (
//     <section className="flex gap-6">
//       <div
//         className={`bg-[#d1a054] ${
//           open ? "w-72" : "w-16"
//         } duration-500 text-gray-100 px-4`}
//       >
//         <div className="py-3 flex justify-end">
//           <HiMenuAlt3
//             size={26}
//             className="cursor-pointer"
//             onClick={() => setOpen(!open)}
//           />
//         </div>
//         <div className="mt-4 gap-4 relative">
//         <ul>
//           {/* Sidebar content here */}
//           {isAdmin ? (
//             <>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/adminhome"
//                   activeClassName="active-link text-white"
//                   className="uppercase flex"
//                 >
//                   <AiFillHome className="text-lg mt-[2px] me-3" />
//                   Admin Home
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/addItem"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <FaUtensils className="text-lg mt-1 me-3" />
//                   add items
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/manageItems"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <FaListUl className="text-lg mt-1 me-3" />
//                   manage items
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/history"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <FaBook className="text-lg mt-1 me-3" />
//                   Manage bookings
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/allusers"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <FaUsers className="text-xl mt-[3px] me-3" />
//                   all users
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/userhome"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <AiFillHome className="text-lg" />
//                   User Home
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/payment"
//                   activeClassName="active-link"
//                   className="uppercase"
//                 >
//                   <FaCalendar className="text-lg" />
//                   Reservation
//                 </NavLink>
//               </li>
//               <li  className="mb-5">
//                 <NavLink
//                   to="/dashboard/mycart"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <FaShoppingCart className="text-lg" />
//                   My Cart
//                   <span className="badge badge-secondary rounded-full">
//                     {cart?.length || 0}
//                   </span>
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/paymenthistory"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <FaWallet className="text-lg" />
//                   Payment History
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/my-booking"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <FaSwatchbook className="text-lg" />
//                   My Booking
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/addreview"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   <MdReviews className="text-lg"/>
//                   add review
//                 </NavLink>
//               </li>

//             </>
//           )}

//           <div className="divider"></div>
//           <li className="mb-5">
//             <NavLink to="/" activeClassName="active-link" className="uppercase flex">
//               <AiFillHome className="text-lg mt-[2px] me-3" />
//               Home
//             </NavLink>
//           </li>
//           <li className="mb-5">
//             <NavLink to="/menu" activeClassName="active-link" className="uppercase flex">
//               <FaBars className="text-lg mt-1 me-3" /> Our Menu
//             </NavLink>
//           </li>
//           <li className="mb-5">
//             <NavLink to="/order/salad" activeClassName="active-link" className="uppercase flex">
//               <FaShoppingBag className="text-lg mt-[2px] me-3" /> Order Food
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               activeClassName="active-link" className="uppercase flex"
//             >
//               <MdEmail className="text-lg mt-1 me-3" />
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//         </div>
//       </div>
//       <div className="m-3 text-xl text-gray-900 font-semibold">
//       <Outlet />
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendar,
  FaSwatchbook,
  FaBars,
  FaShoppingBag,
  FaUtensils,
  FaListUl,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { MdReviews } from "react-icons/md";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const [open, setOpen] = useState(true);

  // Function to check if the screen width is below a certain breakpoint
  const isSmallScreen = () => window.innerWidth <= 640; // You can adjust the breakpoint as needed

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#d1a054] ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 gap-4 relative">
          <ul>
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/adminhome"
                    activeClassName="active-link text-white"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <AiFillHome className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <AiFillHome className="text-lg mt-[2px] me-3" />
                        {open && "Admin Home"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/addItem"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaUtensils className="text-lg mt-1 me-3" />
                    ) : (
                      <>
                        <FaUtensils className="text-lg mt-1 me-3" />
                        {open && "add items"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/manageItems"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaListUl className="text-lg mt-1 me-3" />
                    ) : (
                      <>
                        <FaListUl className="text-lg mt-1 me-3" />
                        {open && "manage items"}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="mb-5">
                  <NavLink
                    to="/dashboard/allusers"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaUsers className="text-xl mt-[3px] me-3" />
                    ) : (
                      <>
                        <FaUsers className="text-xl mt-[3px] me-3" />
                        {open && "all users"}
                      </>
                    )}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/userhome"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <AiFillHome className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <AiFillHome className="text-lg mt-[2px] me-3" />
                        {open && "User Home"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                <NavLink
                  to="/dashboard/addreview"
                  activeClassName="active-link"
                  className="uppercase flex"
                >
                  {isSmallScreen() ? (
                      <MdReviews className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <MdReviews className="text-lg mt-[2px] me-3" />
                        {open && " add review"}
                      </>
                    )}
                </NavLink>
              </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/payment"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaCalendar className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaCalendar className="text-lg mt-[2px] me-3" />
                        {open && "Reservation"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/mycart"
                    activeClassName="active-link"
                    className="uppercase flex relative" // Add 'relative' class here
                  >
                    {isSmallScreen() ? (
                      <>
                        <FaShoppingCart className="text-lg" />
                        <span className="badge badge-secondary rounded-full">
                          {cart?.length || 0}
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          <FaShoppingCart className="text-lg" />
                          {cart?.length > 0 && (
                            <div className="absolute top-[-2px] right-[10px]">
                              <span className="badge badge-secondary rounded-full">
                                {cart?.length}
                              </span>
                            </div>
                          )}
                        </div>
                        {open && "My Cart"}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="mb-5">
                  <NavLink
                    to="/dashboard/paymenthistory"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaWallet className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaWallet className="text-lg mt-[2px] me-3" />
                        {open && " Payment History"}
                      </>
                    )}
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li className="mb-5">
              <NavLink
                to="/"
                activeClassName="active-link"
                className="uppercase flex"
              >
                {isSmallScreen() ? (
                  <AiFillHome className="text-lg mt-[2px] me-3" />
                ) : (
                  <>
                    <AiFillHome className="text-lg mt-[2px] me-3" />
                    {open && "Home"}
                  </>
                )}
              </NavLink>
            </li>
            <li className="mb-5">
              <NavLink
                to="/menu"
                activeClassName="active-link"
                className="uppercase flex"
              >
                {isSmallScreen() ? (
                  <FaBars className="text-lg mt-[2px] me-3" />
                ) : (
                  <>
                    <FaBars className="text-lg mt-1 me-3" />
                    {open && "Our Menu"}
                  </>
                )}
              </NavLink>
            </li>
            <li className="mb-5">
              <NavLink
                to="/order/salad"
                activeClassName="active-link"
                className="uppercase flex"
              >
                {isSmallScreen() ? (
                  <FaShoppingBag className="text-lg mt-[2px] me-3" />
                ) : (
                  <>
                    <FaShoppingBag className="text-lg mt-[2px] me-3" />
                    {open && "Order Food"}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
