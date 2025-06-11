import React, { useContext } from "react";
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const SocialLogin = ({ form }) => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);

      await Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: `Hello ${result.user.displayName || result.user.email}, you are logged in!`,
        timer: 2000,
        showConfirmButton: false,
      });

      navigate(form || '/', { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="mt-6">
      <div className="divider">OR</div>

      {/* Centered Google Button with fixed width */}
      <div className="flex justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border border-[#e5e5e5] shadow-md w-full max-w-[250px]"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="mr-2"
          >
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;