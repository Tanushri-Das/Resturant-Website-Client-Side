import React from "react";
import StarRating from "./StarRating";
import sharingcaring from "../../../assets/sharing caring.png";
import { Helmet } from "react-helmet-async";
import "./AddReview.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    console.log(data);
    axiosSecure.post("/reviews", data)
    .then((data) => {
      console.log("after posting new menu item", data.data);
      reset();
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review added successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <section className="w-full my-20">
      <Helmet>
        <title>Foodie's Paradise | Add Review</title>
      </Helmet>
      <SectionTitle subHeading={sharingcaring} heading={"GIVE A REVIEW..."} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 mx-24 p-14 section-bg"
      >
        <h5 className="rate-text text-center mb-6">Rate US!</h5>
        <StarRating /> {/* Pass the callback */}
        <div className="form-control w-full mt-10">
          <label className="label">
            <span className="label-text">Which recipe you liked most?</span>
          </label>
          <input
            type="text"
            placeholder="Recipe you liked most"
            className="input input-bordered w-full"
            {...register("recipelikemost", {
              required: true,
              maxLength: 120,
            })}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Do you have any suggestion for us?
            </span>
          </label>
          <input
            type="text"
            placeholder="Sugggestion"
            className="input input-bordered w-full"
            {...register("sugggestion", { required: true, maxLength: 140 })}
          />
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text">
              Kindly express your care in a short way.
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Review in detail"
            {...register("reviewdetail", { required: true })}
          ></textarea>
        </div>
        <button className="btn add-item text-white font-bold mt-8 text-base">
          Send Review
        </button>
      </form>
    </section>
  );
};

export default AddReview;