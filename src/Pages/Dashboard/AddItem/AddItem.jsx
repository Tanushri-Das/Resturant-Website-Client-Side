import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import addItem from "../../../assets/---Whats new---.png";
import { useForm } from "react-hook-form";
import "./AddItem.css";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, recipe, category } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            recipe,
            category,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem)
          .then((data) => {
            console.log("after posting new menu item", data.data);
            reset();
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });

    console.log(data);
  };
  console.log(errors);
  //   console.log(img_hosting_token);
  return (
    <section className="w-full my-10">
      <Helmet>
        <title>Foodie's Paradise | My Cart</title>
      </Helmet>
      <SectionTitle subHeading={addItem} heading={"ADD AN ITEM"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 p-14 section-bg w-full lg:w-3/4 mx-auto"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recipe name *</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category *</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option selected>Pick One</option>
              <option>Pizza</option>
              <option>Pasta</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Burger</option>
              <option>Fish</option>
              <option>Chicken</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price *</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text">Recipe Details *</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Item Image *</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image", { required: true })}
          />
        </div>
        <button className="btn add-item text-white font-bold mt-8 text-base">
          Add Item <FaUtensils />
        </button>
      </form>
    </section>
  );
};

export default AddItem;
