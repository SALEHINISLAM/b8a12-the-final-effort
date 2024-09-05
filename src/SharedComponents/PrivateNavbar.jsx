import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUserEmailAndName from "../hooks/useUserEmailandName";

const PrivateNavbar = (props) => {
const {user, logOut}=useContext(AuthContext);
const navigate=useNavigate()
const {existingUser}=useUserEmailAndName()
const handleLogOut=async()=>{
    try{
        await logOut();
        Swal.fire('Logout successful...')
        navigate('/login')
    }
    catch(err){
        console.log(err)
        Swal.fire("Something went wrong")
    }
}
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">iFit Dashboard</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={existingUser?.data? existingUser.data.photoUrl :"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <button className="btn">
                    Hi, {user && user.displayName}
                </button>
              </li>
              <li>
                <a className="btn" href="/dashboard/updateInfo">
                    Add or Update Info
                </a>
              </li>
              {/* user specific nav options */}
              <li>
                <button className="btn btn-error" onClick={()=>handleLogOut()}>
                    Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PrivateNavbar.propTypes = {};

export default PrivateNavbar;
