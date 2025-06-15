// src/Page/ForgotPassword.jsx

import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../firebase/firebase.init";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      return Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please enter your email address.",
      });
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: "Check your inbox or spam folder for the reset link.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Reset Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="bg-base-100 p-8 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-full">Send Reset Link</button>
        </form>

        <div className="text-center mt-4">
          <a href="/login" className="link text-primary">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;