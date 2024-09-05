import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic();

  const createUser = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const ourUser = userCredential.user;
      await updateProfile(ourUser, {
        displayName: name,
      });
      setUser(ourUser);
      return userCredential.user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const userLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const ourUser = userCredential.user;
      return ourUser;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const logOut = async () => {
    await signOut(auth)
      .then((response) => {
        console.log(response);
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        console.log(userInfo);
        const response= await axiosPublic.post("/jwtToken", userInfo)
        if (response.data.token) {
          console.log(response.data.token)
          localStorage.setItem("accessToken",response.data.token)
        }else{
          localStorage.removeItem("accessToken");
        }
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    userLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
