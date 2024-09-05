import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken");
    config.headers.Authorization = `bearer ${token}`;
    return config;
  });
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
