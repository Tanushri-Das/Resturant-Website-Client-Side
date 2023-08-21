import React, { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import { Parallax } from "react-parallax";
import loginImg from "../../assets/others/authentication2.png";
import { FaGoogle } from "react-icons/fa";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
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
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero h-[700px] login flex items-center justify-center mt-2">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" className="w-full" />
          </div>
          <div className="card w-full flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-black text-center text-3xl mb-3 font-bold">
              Login
            </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
              </div>
              {/* TODO: make button disabled for captcha */}
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center new text-[16px] font-semibold mb-2 -mt-6">
            New here? <Link to="/signup">Create a New Account</Link>
          </p>
          <p className="text-center text-sm font-semibold">
            Or sign in with
          </p>
          <div className="flex justify-center items-center my-1">
          <div className="google">
            <div className="google-icon">
              <div className="google-icon-circle">
                <FaGoogle />
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
