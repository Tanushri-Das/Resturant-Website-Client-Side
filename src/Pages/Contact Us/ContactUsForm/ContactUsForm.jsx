import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import sendmsg from "../../../assets/contact/send messages.png";
import {BsSendFill} from "react-icons/bs"
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    
      const [axiosSecure] = useAxiosSecure();
    
      const onSubmit = (data) => {
        console.log(data);
        axiosSecure.post("/contact", data)
        .then((data) => {
          console.log("after posting new menu item", data.data);
          reset();
          if (data.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Contact information successfully",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      };
  return (
    <div className="mb-40 mx-4">
      <SectionTitle subHeading={sendmsg} heading={"CONTACT FORM"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 w-full lg:w-3/4 xl:w-1/2 mx-auto rounded-lg p-6 md:p-10 section-bg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name *</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              {...register("name", { required: true, maxLength: 120 })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email *</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="form-control w-full mt-4">
          <label className="label">
            <span className="label-text">Phone *</span>
          </label>
          <input
            type="number"
            placeholder="Enter your phone number"
            className="input input-bordered w-full"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="form-control mt-4 md:mt-6">
          <label className="label">
            <span className="label-text">Message *</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Write your message here"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div className="flex justify-center">
        <button className="btn add-item text-white font-bold mt-8 text-base">
        Send Message <BsSendFill />
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
