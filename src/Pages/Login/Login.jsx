import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col items-center">
            <h1 className="text-5xl font-bold">
                Login Now
            </h1>
          <div className=" flex flex-col lg:flex-row-reverse">
            {" "}
            <div className="text-center lg:text-left">
              <img
                src="https://i.postimg.cc/hjdbbwC2/3d-illustration-computer-monitor-login-screen-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>Do not have an account? <Link to={'/register'} className="btn-link">Register</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
