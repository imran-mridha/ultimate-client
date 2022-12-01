import React from "react";
import {Link} from 'react-router-dom'

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };
  return (
    <div className="rounded-md shadow-md p-5">
      <h2 className="text-2xl text-center my-10">Log In Form</h2>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col mb-2">
          <input
            className="w-full p-2 border-b border-border mt-1 outline-0 focus:border-primary text-sm"
            type="email"
            name="email"
            placeholder="Write Email Address"
            id="email"
          />
        </div>
        <div className="flex flex-col mb-2">
          <input
            className="w-full p-2 border-b border-border mt-1 outline-0 focus:border-primary text-sm"
            type="password"
            name="password"
            placeholder="Write Password"
            id="password"
          />
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            type="submit"
            className="px-3 py-2 text-lg rounded-md text-white bg-primary"
          >
            Log In
          </button>
        </div>
      </form>
      <div className="my-5 text-center">
        <p className="text-accent">
          Don't Have an Account?{" "}
          <span className="font-semibold text-primary uppercase">
            <Link to="/sign-up">Signup Here</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
