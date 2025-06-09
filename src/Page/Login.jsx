import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { signInUser, signInWithGoogle } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signInUser(email, password);
      toast.success("Login successful");
      reset();
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input {...register("password")} type="password" placeholder="Password" className="input input-bordered w-full" required />
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
        <div className="divider">OR</div>
        <button onClick={signInWithGoogle} className="btn btn-outline w-full">Login with Google</button>
      </div>
    </div>
  );
};

export default Login;