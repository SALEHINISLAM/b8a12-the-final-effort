import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation()
  if (loading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  }
  if (!user) {
    return <Navigate to={'/login'} state={{from:location}} replace/>
  }
  return children
};

PrivateRoutes.propTypes = {
    children:PropTypes.node,
};

export default PrivateRoutes;
