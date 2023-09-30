import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import allusers from "../../../assets/all-users.png";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure]=useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleMakeAdmin = user => {
    fetch(`https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/users/admin/${user._id}`,{
      method:'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.modifiedCount){
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an admin now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  };
  return (
    <section className="w-full py-10 section-bg">
      <Helmet>
        <title>Foodie's Paradise | All Users</title>
      </Helmet>
      <SectionTitle subHeading={allusers} heading={"WANNA ADD MORE?"} />
      <div className="mycart-total">
        <div className="font-bold uppercase flex justify-between mt-16 items-center">
          <h3 className="text-3xl text">Total users : {users.length}</h3>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-lg">
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost bg-amber-500 text-white btn-md"
                      >
                        <FaUserShield className="text-lg" />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost bg-red-600 text-white btn-md"
                    >
                      <FaTrashAlt className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
