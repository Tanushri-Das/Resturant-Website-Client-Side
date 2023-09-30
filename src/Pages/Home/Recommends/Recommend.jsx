// import React from "react";

// const Recommend = ({ recommend }) => {
//   const { name, recipe, price, image } = recommend;
//   return (
//     <div className="bg-gray-100 w-full h-full flex flex-col">
//       <img
//         className="w-full h-56 object-cover object-center mb-2"
//         src={image}
//         alt="content"
//       />
//       <div className="p-6 flex-grow text-center">
//         <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
//           {name}
//         </h3>
//         <p className="leading-relaxed text-base">{recipe}</p>
//       </div>
//       <div className="flex justify-center">
//         <button onClick={()=>handleAddToCart(item)} className="bg-gray-300 text-orange-500 border-b-4 border-orange-500 py-4 px-8 text-lg uppercase font-medium hover:bg-black">
//           add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Recommend;

import React from "react";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2"; // Import SweetAlert for notifications
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Recommend = ({ recommend }) => {
  const { name, recipe, price, image, _id } = recommend;
  const { user} = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [axiosSecure] = useAxiosSecure();
  const navigate=useNavigate();
  const location=useLocation();

  const handleAddToCart = async (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        recipe,
        price,
        image,
        email: user.email,
      };

      try {
        // Make an API request to add the item to the user's cart
        const res = await axiosSecure.post("/carts", cartItem);

        if (res.data.insertedId) {
          // Item added to the cart successfully
          refetch(); // Refetch cart to update the number of items in the cart
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food added to the cart.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Error adding to cart:", error);

        // Handle error, e.g., show an error notification
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to the login page
          navigate('/login',{state:{from:location}})
        }
      });
    }

  };

  return (
    <div className="bg-gray-100 w-full h-full flex flex-col">
      <img
        className="w-full h-56 object-cover object-center mb-2"
        src={image}
        alt="content"
      />
      <div className="p-6 flex-grow text-center">
        <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
          {name}
        </h3>
        <p className="leading-relaxed text-base">{recipe}</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleAddToCart(recommend)} // Pass the item to the function
          className="bg-gray-300 text-orange-500 border-b-4 border-orange-500 py-4 px-8 text-lg uppercase font-medium hover:bg-black"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Recommend;