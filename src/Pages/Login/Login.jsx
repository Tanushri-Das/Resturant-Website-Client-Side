// import React, { useContext, useEffect, useRef, useState } from "react";
// import "./Login.css";
// import { Parallax } from "react-parallax";
// import loginImg from "../../assets/others/authentication2.png";

// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   LoadCanvasTemplateNoReload,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
// import useAuth from "../../Hooks/useAuth";

// const Login = () => {
//   const [disabled, setDisabled] = useState(true);

//   const { login } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   console.log(from);
//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     login(email, password).then((result) => {
//       const user = result.user;
//       console.log(user);

//       Swal.fire("Good job!", "You Login Successfully!", "success");
//       navigate(from, { replace: true });
//     });
//   };
//   const handleValidateCaptcha = (e) => {
//     const user_captcha_value = e.target.value;
//     if (validateCaptcha(user_captcha_value)) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Foodie's Paradise | Login</title>
//       </Helmet>
//       <div className="hero h-[700px] login flex items-center justify-center mt-2">
//         <div className="hero-content flex-col md:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <img src={loginImg} alt="" className="w-full hidden" />
//           </div>
//           <div className="card w-full flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100">
//             <form onSubmit={handleLogin} className="card-body">
//             <h1 className="text-black text-center text-3xl mb-3 font-bold login-text">
//               Login
//             </h1>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                 />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <LoadCanvasTemplate />
//                 </label>
//                 <input
//                   onBlur={handleValidateCaptcha}
//                   type="text"
//                   name="captcha"
//                   placeholder="type the captcha above"
//                   className="input input-bordered"
//                 />
//               </div>
//               {/* TODO: make button disabled for captcha */}
//               <div className="form-control mt-6">
//                 {/* <input
//                   disabled={false}
//                   className="btn btn-primary"
//                   type="submit"
//                   value="Login"
//                 /> */}
//                 <input
//                   disabled={disabled}
//                   className="btn btn-primary"
//                   type="submit"
//                   value="Login"
//                 />
//               </div>
//             </form>
//             <p className="text-center new text-[16px] font-semibold mb-2 -mt-6">
//             New here? <Link to="/signup">Create a New Account</Link>
//           </p>
//           <p className="text-center text-sm font-semibold">
//             Or sign in with
//           </p>
//           <div className="flex justify-center items-center mt-1 mb-4">
//           <SocialLogin/>
//           </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

// import React, { useContext, useEffect, useRef, useState } from "react";
// import "./Login.css";
// import { Parallax } from "react-parallax";
// import loginImg from "../../assets/others/authentication2.png";

// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   LoadCanvasTemplateNoReload,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
// import useAuth from "../../Hooks/useAuth";

// const Login = () => {
//   const [disabled, setDisabled] = useState(true);

//   const { login } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   console.log(from);
//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     login(email, password).then((result) => {
//       const user = result.user;
//       console.log(user);

//       Swal.fire("Good job!", "You Login Successfully!", "success");
//       navigate(from, { replace: true });
//     });
//   };
//   const handleValidateCaptcha = (e) => {
//     const user_captcha_value = e.target.value;
//     if (validateCaptcha(user_captcha_value)) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Foodie's Paradise | Login</title>
//       </Helmet>
//       <div className="card w-full flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100 mx-auto my-10">
//         <form onSubmit={handleLogin} className="card-body">
//           <h1 className="text-black text-center text-3xl mb-3 font-bold login-text">
//             Login
//           </h1>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-bold text-[16px]">Email</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="email"
//               className="input input-bordered"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-bold text-[16px]">Password</span>
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="password"
//               className="input input-bordered"
//             />
//             <label className="label">
//               <a href="#" className="label-text-alt link link-hover text-[16px]">
//                 Forgot password?
//               </a>
//             </label>
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <LoadCanvasTemplate />
//             </label>
//             <input
//               onBlur={handleValidateCaptcha}
//               type="text"
//               name="captcha"
//               placeholder="type the captcha above"
//               className="input input-bordered"
//             />
//           </div>
//           {/* TODO: make button disabled for captcha */}
//           <div className="form-control mt-6">
//             {/* <input
//                   disabled={false}
//                   className="btn btn-primary"
//                   type="submit"
//                   value="Login"
//                 /> */}
//             <input
//               disabled={disabled}
//               className="btn btn-primary"
//               type="submit"
//               value="Login"
//             />
//           </div>
//         </form>
//         <p className="text-center new text-[16px] font-semibold mb-2 -mt-6">
//           New here? <Link to="/signup">Create a New Account</Link>
//         </p>
//         <p className="text-center text-sm font-semibold">Or sign in with</p>
//         <div className="flex justify-center items-center mt-1 mb-4">
//           <SocialLogin />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;




// import React, { useEffect, useState } from "react";
// import "./Login.css";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
// import useAuth from "../../Hooks/useAuth";

// const Login = () => {
//   const { login } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   console.log(from);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     login(email, password).then((result) => {
//       const user = result.user;
//       console.log(user);

//       Swal.fire("Good job!", "You Login Successfully!", "success");
//       navigate(from, { replace: true });
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Foodie's Paradise | Login</title>
//       </Helmet>
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="card w-full flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100 mx-auto">
//           <form onSubmit={handleLogin} className="card-body">
//             <h1 className="text-black text-center text-3xl mb-3 font-bold login-text">
//               Login
//             </h1>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold text-[16px]">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold text-[16px]">
//                   Password
//                 </span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//               />
//               <label className="label">
//                 <a
//                   href="#"
//                   className="label-text-alt link link-hover text-[16px]"
//                 >
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-6">
//               <input className="btn btn-primary" type="submit" value="Login" />
//             </div>
//           </form>
//           <p className="text-center new text-[16px] font-semibold mb-2 -mt-6">
//             New here? <Link to="/signup">Create a New Account</Link>
//           </p>
//           <p className="text-center text-sm font-semibold">Or sign in with</p>
//           <div className="flex justify-center items-center mt-1 mb-4">
//             <SocialLogin />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;



import React, { useEffect, useState } from "react";
import "./Login.css";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire("Good job!", "You Login Successfully!", "success");
      navigate(from, { replace: true });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Foodie's Paradise | Login</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card w-full flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100 mx-auto">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-black text-center text-3xl mb-3 font-bold login-text">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[16px]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[16px]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-[16px]"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center new text-[16px] font-semibold mb-2 -mt-6">
            New here? <Link to="/signup">Create a New Account</Link>
          </p>
          <p className="text-center text-sm font-semibold">Or sign in with</p>
          <div className="flex justify-center items-center mt-1 mb-4">
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
