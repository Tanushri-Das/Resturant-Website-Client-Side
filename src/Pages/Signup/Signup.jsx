// import { Helmet } from "react-helmet-async";
// import { useForm } from "react-hook-form";
// import signupImg from "../../assets/others/authentication2.png";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
// import useAuth from "../../Hooks/useAuth";

// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();
//   const navigate = useNavigate();

//   const { createUser, updateUserProfile } = useAuth();

//   const onSubmit = (data) => {
//     console.log(data);
//     createUser(data.email, data.password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         updateUserProfile(data.name, data.photoUrl)
//           .then(() => {
//             const saveUser = { name: data.name, email: data.email };
//             fetch("https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/users", {
//               method: "POST",
//               headers: {
//                 "content-type": "application/json",
//               },
//               body: JSON.stringify(saveUser),
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 if (data.insertedId) {
//                   reset();
//                   Swal.fire(
//                     "Good job!",
//                     "Congratulations ! SignUp Successfully!",
//                     "success"
//                   );
//                   navigate("/");
//                 }
//               });
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   return (
//     <>
//       <Helmet>
//         <title>Foodie's Paradise | Sign Up</title>
//       </Helmet>
//       <div className="hero h-[700px] login flex items-center justify-center mt-2">
//         <div className="hero-content flex-col md:flex-row">
//           <div className="card w-full flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <h1
//                 className="text-black text-center text-3xl mb-3 font-bold"
//                 style={{ textShadow: "none" }}
//               >
//                 Sign Up
//               </h1>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-bold text-[15px]">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   {...register("name", { required: "Name is required" })}
//                   className="input input-bordered"
//                 />
//                 {errors.name && (
//                   <span className="text-red-600 mt-1">
//                     {errors.name?.message}
//                   </span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-bold text-[15px]">
//                     Photo Url
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="photoUrl"
//                   placeholder="photoUrl"
//                   {...register("photoUrl", {
//                     required: "photoUrl is required",
//                   })}
//                   className="input input-bordered"
//                 />
//                 {errors.photoUrl && (
//                   <span className="text-red-600 mt-1">
//                     {errors.photoUrl?.message}
//                   </span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-bold text-[15px]">
//                     Email
//                   </span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   {...register("email", {
//                     required: "Email Address is required",
//                   })}
//                   className="input input-bordered"
//                 />
//                 {errors.email && (
//                   <span className="text-red-600 mt-1">
//                     {errors.email?.message}
//                   </span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-bold text-[15px]">
//                     Password
//                   </span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: 6,
//                     maxLength: 10,
//                     pattern: {
//                       value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
//                       message:
//                         "Password must be one uppercase letter,one special character,1 digit",
//                     },
//                   })}
//                   className="input input-bordered"
//                 />
//                 {errors.password && (
//                   <span className="text-red-600 mt-1">
//                     {errors.password?.message}
//                   </span>
//                 )}
//                 {errors.password?.type === "minLength" && (
//                   <span className="text-red-600 mt-1">
//                     Password must be at least 6 characters
//                   </span>
//                 )}
//                 {errors.password?.type === "maxLength" && (
//                   <span className="text-red-600 mt-1">
//                     Password must not exceed 10 characters
//                   </span>
//                 )}

//                 <label className="label">
//                   <a
//                     href="#"
//                     className="label-text-alt link link-hover font-medium text-[15px]"
//                   >
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>

//               <div className="form-control mt-2">
//                 <input
//                   className="btn btn-login text-white"
//                   type="submit"
//                   value="Sign Up"
//                 />
//               </div>
//             </form>
//             <p className="text-center new text-[16px] font-semibold mb-2 -mt-6">
//               Already registered? <Link to="/login">Go to log in</Link>
//             </p>
//             <p className="text-center text-sm font-semibold">Or sign up with</p>
//             <div className="divider mx-2"></div>
//             <div className="flex justify-center items-center mt-1 mb-4">
//               <SocialLogin />
//             </div>
//           </div>
//           <div className="text-center lg:text-left">
//             <img src={signupImg} alt="" className="w-full" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;





// import { Helmet } from "react-helmet-async";
// import { useForm } from "react-hook-form";
// import signupImg from "../../assets/others/authentication2.png";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
// import useAuth from "../../Hooks/useAuth";

// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();
//   const navigate = useNavigate();

//   const { createUser, updateUserProfile } = useAuth();

//   const onSubmit = (data) => {
//     console.log(data);
//     createUser(data.email, data.password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         updateUserProfile(data.name, data.photoUrl)
//           .then(() => {
//             const saveUser = { name: data.name, email: data.email };
//             fetch("https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/users", {
//               method: "POST",
//               headers: {
//                 "content-type": "application/json",
//               },
//               body: JSON.stringify(saveUser),
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 if (data.insertedId) {
//                   reset();
//                   Swal.fire(
//                     "Good job!",
//                     "Congratulations ! SignUp Successfully!",
//                     "success"
//                   );
//                   navigate("/");
//                 }
//               });
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   return (
//     <>
//       <Helmet>
//         <title>Foodie's Paradise | Sign Up</title>
//       </Helmet>
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="card w-full flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100 mx-auto">
//           <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//             <h1
//               className="text-black text-center text-3xl mb-3 font-bold"
//               style={{ textShadow: "none" }}
//             >
//               Sign Up
//             </h1>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold text-[15px]">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 {...register("name", { required: "Name is required" })}
//                 className="input input-bordered"
//               />
//               {errors.name && (
//                 <span className="text-red-600 mt-1">
//                   {errors.name?.message}
//                 </span>
//               )}
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold text-[15px]">
//                   Photo Url
//                 </span>
//               </label>
//               <input
//                 type="text"
//                 name="photoUrl"
//                 placeholder="photoUrl"
//                 {...register("photoUrl", {
//                   required: "photoUrl is required",
//                 })}
//                 className="input input-bordered"
//               />
//               {errors.photoUrl && (
//                 <span className="text-red-600 mt-1">
//                   {errors.photoUrl?.message}
//                 </span>
//               )}
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold text-[15px]">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 {...register("email", {
//                   required: "Email Address is required",
//                 })}
//                 className="input input-bordered"
//               />
//               {errors.email && (
//                 <span className="text-red-600 mt-1">
//                   {errors.email?.message}
//                 </span>
//               )}
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold text-[15px]">
//                   Password
//                 </span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: 6,
//                   maxLength: 10,
//                   pattern: {
//                     value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
//                     message:
//                       "Password must be one uppercase letter,one special character,1 digit",
//                   },
//                 })}
//                 className="input input-bordered"
//               />
//               {errors.password && (
//                 <span className="text-red-600 mt-1">
//                   {errors.password?.message}
//                 </span>
//               )}
//               {errors.password?.type === "minLength" && (
//                 <span className="text-red-600 mt-1">
//                   Password must be at least 6 characters
//                 </span>
//               )}
//               {errors.password?.type === "maxLength" && (
//                 <span className="text-red-600 mt-1">
//                   Password must not exceed 10 characters
//                 </span>
//               )}
//             </div>

//             <div className="form-control mt-2">
//               <input
//                 className="btn btn-login text-white"
//                 type="submit"
//                 value="Sign Up"
//               />
//             </div>
//           </form>
//           <p className="text-center new text-[16px] font-semibold mb-2 -mt-6">
//             Already registered? <Link to="/login">Go to log in</Link>
//           </p>
//           <p className="text-center text-sm font-semibold">Or sign up with</p>
//           <div className="divider mx-2"></div>
//           <div className="flex justify-center items-center pb-6">
//             <SocialLogin />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;




import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire(
                    "Good job!",
                    "Congratulations ! Sign Up Successfully!",
                    "success"
                  );
                  navigate("/");
                }
              });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Foodie's Paradise | Sign Up</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card w-full flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1
              className="text-black text-center text-3xl mb-3 font-bold"
              style={{ textShadow: "none" }}
            >
              Sign Up
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[15px]">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600 mt-1">
                  {errors.name?.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[15px]">
                  Photo Url
                </span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="photoUrl"
                {...register("photoUrl", {
                  required: "photoUrl is required",
                })}
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-600 mt-1">
                  {errors.photoUrl?.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[15px]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600 mt-1">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[15px]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                    maxLength: 10,
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must be one uppercase letter, one special character, 1 digit",
                    },
                  })}
                  className="input input-bordered w-full"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-600 mt-1">
                  {errors.password?.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 mt-1">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600 mt-1">
                  Password must not exceed 10 characters
                </span>
              )}
            </div>

            <div className="form-control mt-2">
              <input
                className="btn btn-login text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center new text-[16px] font-semibold mb-2 -mt-6">
            Already registered? <Link to="/login">Go to log in</Link>
          </p>
          <p className="text-center text-sm font-semibold">Or sign up with</p>
          <div className="divider mx-2"></div>
          <div className="flex justify-center items-center pb-6">
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
