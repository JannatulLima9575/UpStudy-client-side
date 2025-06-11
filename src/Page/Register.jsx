import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import lottieImage from "../assets/lottiefiles/Register.json";
import { AuthContext } from "../Contexts/AuthContext";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { createUser, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be 6+ characters with uppercase & lowercase letters",
      });
    }

    try {
      const result = await createUser(email, password);
      console.log("Registered:", result.user);

      // Update profile with name and photoURL
      if (result.user) {
        await updateProfile(result.user, { displayName: name, photoURL: photo });
      }

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Registration completed successfully",
      });

      form.reset();
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2">
          <Lottie
            animationData={lottieImage}
            loop={true}
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Register Card */}
        <div className="bg-base-100 md:shadow-xl rounded-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-base-content">
            Create Your Account
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label text-base-content">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="label text-base-content">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full"
                placeholder="Link to profile photo"
                required
              />
            </div>

            <div>
              <label className="label text-base-content">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="label text-base-content">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Enter a strong password"
                required
              />
            </div>

            <div className="flex justify-center">
              <button className="btn btn-primary max-w-[250px] w-full">
                Register
              </button>
            </div>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <SocialLogin />
          </div>

          {/* Optional login link */}
          <p className="text-center mt-4 text-sm text-base-content">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary font-semibold link link-hover"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;