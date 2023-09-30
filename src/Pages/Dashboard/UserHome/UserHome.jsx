import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { FaWallet, FaUser, FaPhoneAlt, FaShoppingCart, FaStar } from "react-icons/fa";
import "./UserHome.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure(`/user-stats?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="w-full my-12 px-6">
      <h5 className="text-2xl font-medium">Hi, Welcome Back !</h5>
      <div className="grid grid-cols-3 gap-4 my-12">
        <div className="flex wallet items-center justify-center py-5">
          <div className="border border-red-500">
            <FaWallet className="text-2xl text-white" />
          </div>
          <div className="border border-red-500 pl-6">
            <h4 className="text-white font-bold text-xl mb-1">{stats.menu}</h4>
            <h5 className="text-white text-xl">Menu</h5>
          </div>
        </div>
        <div className="flex users items-center justify-center py-5">
          <div className="border border-red-500">
            <FaUser className="text-2xl text-white" />
          </div>
          <div className="border border-red-500 pl-6">
            <h5 className="text-white font-bold text-xl mb-1">
              {user?.displayName}
            </h5>
            <h5 className="text-white text-xl">Name</h5>
          </div>
        </div>
        <div className="flex items items-center justify-center py-5">
          <div className="border border-red-500">
            <FaPhoneAlt className="text-2xl text-white" />
          </div>
          <div className="border border-red-500 pl-6">
            <h5 className="text-white font-bold text-xl mb-1">
              +8801646471948
            </h5>
            <h5 className="text-white text-xl">Contact</h5>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 my-12">
        <div className="activities flex flex-col items-center justify-center py-20 text-center">
          <h5 className="text-2xl font-medium mb-8">Your Activities</h5>
          <div className="border border-red-500 flex items-center justify-center mb-3 icon-first">
            <FaShoppingCart className="text-2xl me-2" />
            <h4 className="activities-text">Orders: {stats.orders}</h4>
          </div>
          <div className="border border-red-500 flex items-center justify-center mb-3 icon-second">
            <FaStar className="text-2xl icon me-2" />
            <h4 className="activities-text">Reviews: {stats.reviews}</h4>
          </div>
          <div className="border border-red-500 flex items-center justify-center icon-third">
            <FaWallet className="text-2xl icon me-2" />
            <h4 className="activities-text">Payment: {stats.payment}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
