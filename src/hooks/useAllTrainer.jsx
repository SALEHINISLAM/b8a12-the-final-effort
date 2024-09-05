import React, { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAllTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const [trainer, setTrainer] = useState([]);
  useEffect(() => {
    axiosPublic.get("/trainer").then((res) => setTrainer(res.data));
  }, [axiosPublic]);
  return trainer;
};

export default useAllTrainer;
