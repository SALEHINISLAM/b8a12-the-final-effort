import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useFindTrainer = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [user, "findTrainer"],
    queryFn: async () => {
      if (!user || loading) {
        return null;
      }
      const findTrainer = await axiosSecure(`/findTrainer?email=${user.email}`);
      const bookedTrainer=await axiosSecure(`/myBookedTrainer?email=${user.email}`)
      return {
        userName: user.name,
        userEmail: user.email,
        possibleTrainer: findTrainer.data,
        bookedTrainer:bookedTrainer.data
      };
    },
  });
  return {
    userName: data?.userName,
    userEmail: data?.userEmail,
    possibleTrainer: data?.possibleTrainer,
    bookedTrainer:data?.bookedTrainer,
    isLoading,
    error,
    refetch,
  };
};

export default useFindTrainer;
