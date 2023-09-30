import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
            navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-outline">
        <FcGoogle className="text-xl" />
        Sign Up with Google
      </button>
    </div>
  );
};

export default SocialLogin;
