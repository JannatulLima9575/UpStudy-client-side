import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import lottieImage from "../assets/lottiefiles/Login.json";
import { AuthContext } from "./../Contexts/AuthContext";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"; // safer path fallback

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signInUser(email, password);
      console.log(result.user);

      // SweetAlert success message
      await Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: `Hello ${result.user.displayName || result.user.email}, you are logged in!`,
        timer: 2000,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10">
        {/* Lottie animation */}
        <div className="w-full lg:w-1/2">
          <Lottie
            animationData={lottieImage}
            loop={true}
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Login Card */}
        <div className="bg-base-100 md:shadow-xl rounded-xl w-full max-w-md">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-6">
              Log In to EduVerse
            </h2>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="text-sm text-right">
                <a className="link link-hover">Forgot password?</a>
              </div>

              {/* Centered Sign In Button */}
              <div className="flex justify-center">
                <button className="btn btn-primary w-full max-w-[250px]">
                  Sign In
                </button>
              </div>
            </form>

            {/* Social Login below */}
            <SocialLogin />

            {/* Optional register link */}
            <p className="text-center mt-4 text-sm">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-primary font-semibold link link-hover"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;