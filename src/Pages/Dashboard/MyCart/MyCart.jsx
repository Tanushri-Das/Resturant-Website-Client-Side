import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import mycart from "../../../assets/---My Cart---.png";
import "./MyCart.css";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const formattedTotal = total.toFixed(2);
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
      if (result.isConfirmed) {
        fetch(`https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <section className="py-20 section-bg w-full">
      <Helmet>
        <title>Foodie's Paradise | My Cart</title>
      </Helmet>
      <SectionTitle subHeading={mycart} heading={"WANNA ADD MORE?"} />
      <div className="mycart-total">
        <div className="font-bold uppercase flex justify-between mt-16 items-center">
          <h5 className="text-2xl text">Total orders: {cart.length}</h5>
          <h5 className="text-2xl text">Total price: ${formattedTotal}</h5>
          <Link to="/dashboard/payment">
            <button className="pay-btn text">PAY</button>
          </Link>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
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

export default MyCart;
