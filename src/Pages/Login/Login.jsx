import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { user, loading, userLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const from=location.state?.from?.pathname ||'/dashboard';
  const onSubmitLoginForm =async (data) => {
    console.log(data);
    const ourUser=await userLogin(data.email, data.password);
    console.log(ourUser)
  };
{
    user && Swal.fire("Welcome back...")
}
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col items-center">
          <h1 className="text-5xl font-bold">Login Now</h1>
          <div className=" flex flex-col lg:flex-row-reverse">
            {" "}
            <div className="text-center lg:text-left">
              <img
                src="https://i.postimg.cc/hjdbbwC2/3d-illustration-computer-monitor-login-screen-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form
                className="card-body"
                onSubmit={handleSubmit(onSubmitLoginForm)}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    {...register("email")}
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
                    {...register("password", {
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    })}
                  />
                  {errors.password?.type === "pattern" && (
                    <p role="alert" className="text-error">
                      Your password contain at least one capital and small
                      character, one number and one special character and length
                      must be greater than 6 character
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button
                  disabled={user || loading}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <p>
                  Do not have an account?{" "}
                  <Link to={"/register"} className="btn-link">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
