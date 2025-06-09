import { useState } from "react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useForm } from 'react-hook-form';

const AuthForm = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { createUser, signInUser, signInWithGoogle } = useAuth();

  const onSubmit = async (data) => {
    const { name, email, photo, password } = data;

    // Password validation (for register)
    if (isRegister) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(password)) {
        return toast.error("Password must contain uppercase, lowercase, and be 6+ characters.");
      }
    }

    try {
      if (isRegister) {
        await createUser(email, password);
        toast.success("Registration Successful!");
      } else {
        await signInUser(email, password);
        toast.success("Login Successful!");
      }
      reset();
      onClose(); // Close the modal on successful login or registration
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-sm bg-base-100 shadow-lg p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">
        {isRegister ? "Register to EduVerse" : "Login to EduVerse"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {isRegister && (
          <>
            <input {...register("name")} type="text" placeholder="Full Name" className="input input-bordered w-full" required />
            <input {...register("photo")} type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
          </>
        )}
        <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full" required />
        <input {...register("password")} type="password" placeholder="Password" className="input input-bordered w-full" required />
        <button type="submit" className="btn btn-primary w-full">
          {isRegister ? "Register" : "Login"}
        </button>
        <button onClick={signInWithGoogle} type="button" className="btn btn-outline w-full flex items-center gap-2">
          <FcGoogle className="text-xl" /> Sign in with Google
        </button>
      </form>
      <p className="text-sm mt-3 text-center">
        {isRegister ? "Already have an account?" : "Don't have an account?"}
        <span className="text-primary cursor-pointer ml-1" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login" : "Register"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;