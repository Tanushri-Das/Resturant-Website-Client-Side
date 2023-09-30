import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import hurryUp from "../../../assets/Hurry up.png";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, setMenu] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const totalItems = menu ? menu.length : 0;

  // State variables to manage edited product name and price
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  // State variable to track which item is being edited
  const [editingItem, setEditingItem] = useState(null);

  // Function to fetch and update menu data
  const fetchMenuData = () => {
    axiosSecure
      .get("/menu")
      .then((res) => {
        // Update the 'menu' state with the fetched data
        setMenu(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Use useEffect to fetch data when the component mounts and set up polling
  useEffect(() => {
    fetchMenuData(); // Fetch data when the component mounts

    // Set up polling to fetch data every X seconds (e.g., every 10 seconds)
    const pollInterval = 3000; // 10 seconds
    const pollTimer = setInterval(() => {
      fetchMenuData(); // Fetch data periodically
    }, pollInterval);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(pollTimer);
    };
  }, []);

  const handleEdit = (item) => {
    // Set the editedName and editedPrice to the current values
    setEditedName(item.name);
    setEditedPrice(item.price);

    // Set the editingItem to the current item
    setEditingItem(item);

    // Show the modal
    document.getElementById("my_modal_1").showModal();
  };

  const handleUpdate = () => {
    if (!editingItem) {
      console.log("No item is being edited");
      return; // Ensure editingItem is defined
    }

    // Log the editedName, editedPrice, and item ID
    console.log("Edited Product Name:", editedName);
    console.log("Edited Price:", editedPrice);
    console.log("Item ID:", editingItem._id);

    axiosSecure
      .put(`/menu/${editingItem._id}`, {
        name: editedName,
        price: editedPrice,
      })
      .then((res) => {
        console.log("updated res", res.data);
        if (res.data.message) {
          // Menu item updated successfully
          fetchMenuData(); // Refresh menu data
          document.getElementById("my_modal_1").close(); // Close the modal
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/menu/${item._id}`)
          .then((res) => {
            console.log("deleted res", res.data);
            if (res.data.deletedCount > 0) {
              fetchMenuData(); // Refresh menu data
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <section className="w-full py-10 section-bg">
      <Helmet>
        <title>Foodie's Paradise | All Users</title>
      </Helmet>
      <SectionTitle subHeading={hurryUp} heading={"MANAGE ALL ITEMS"} />
      <div className="mycart-total bg-white mx-10 mt-16">
        <div className="font-bold uppercase flex justify-between items-center">
          <h3 className="text-3xl text">Total items: {totalItems}</h3>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>Category</th>
                <th>PRICE</th>
                <th className="col-span-2 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td className="text-lg">
                    <button
                      className="btn pay-btn text btn-md"
                      onClick={() => handleEdit(item)}
                    >
                      <HiOutlinePencilAlt className="text-xl" />
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          {editingItem?.name}
                        </h3>
                        <div className="pt-6 pb-3 text-start flex flex-col">
                          <label htmlFor="productName">Product Name</label>
                          <input
                            type="text"
                            id="productName"
                            value={editedName}
                            className="input input-bordered input-md w-full mt-2"
                            onChange={(e) => setEditedName(e.target.value)}
                          />
                        </div>
                        <div className="pb-3 text-start flex flex-col">
                          <label htmlFor="productPrice">Price</label>
                          <input
                            type="text"
                            id="productPrice"
                            value={`$${editedPrice}`} // Include the dollar sign in the value
                            className="input input-bordered input-md w-full mt-2"
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              // Remove any non-numeric characters (except the decimal point)
                              const numericValue = inputValue.replace(
                                /[^0-9.]/g,
                                ""
                              );
                              setEditedPrice(numericValue);
                            }}
                          />
                        </div>
                        <div className="modal-action justify-center">
                          <button
                            className="btn"
                            onClick={() => {
                              handleUpdate();
                              document.getElementById("my_modal_1").close();
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </dialog>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600 text-white btn-md"
                    >
                      <FaTrashAlt className="text-lg" />
                    </button>
                  </td>
                  {/* <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600 text-white btn-md"
                    >
                      <FaTrashAlt className="text-lg" />
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageItems;
