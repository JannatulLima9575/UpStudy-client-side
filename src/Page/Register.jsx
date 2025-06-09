import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
// import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return toast.error("Password must be 6+ chars with uppercase & lowercase");
    }

    try {
      await createUser(email, password);
      toast.success("Registration successful");
      reset();
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full" required />
          <input {...register("photo")} type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
          <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input {...register("password")} type="password" placeholder="Password" className="input input-bordered w-full" required />
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;