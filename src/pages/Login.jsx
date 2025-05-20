import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-svh p-5 m-auto text-center grid place-items-center bg-url-auriculares ">
      <form className="flex flex-col items-center bg-[#23222cd0] p-5 rounded shadow-md bordered-box">
        <Link to="/" className="flex items-center gap-2 mb-5">
          <img
            src={"/src/assets/A5.png"}
            alt="logo"
            className={`h-18 bg-blend-overlay `}
          />
        </Link>

        <input
          type="text"
          placeholder="Email"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
