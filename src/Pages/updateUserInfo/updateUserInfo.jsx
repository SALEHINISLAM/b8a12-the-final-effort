import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useUserEmailAndName from "../../hooks/useUserEmailandName";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const UpdateUserInfo = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { userName, userEmail, existingUser, isLoading, error, refetch } =
    useUserEmailAndName();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  if (isLoading) {
    return <span className="loading"></span>;
  }
  if (error) {
    return <p>Error occurs during loading this page...</p>;
  }
  const handleSelectedValue = (e) => {
    //e.preventDefault();
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };

  const timeGenerator = (start, end) => {
    const result = [];
    for (let i = parseInt(start); i < parseInt(end); i++) {
      result.push(i);
    }
    return result;
  };
  const onSubmitData = async (data) => {
    const preferredTime = timeGenerator(data.from, data.to);
    const userInfo = {
      ...data,
      name: userName,
      email: userEmail,
      role: selectedValue,
      slot: preferredTime,
    };
    console.log(userInfo, existingUser);

    if (!existingUser.data) {
      const response = await axiosSecure.post("/updateUserInfo", userInfo);
      if (response.data.insertedId) {
        Swal.fire("Your information updated successfully...");
        refetch();
      } else {
        Swal.fire("Something went wrong...");
      }
    }
  };
  const timeOptions = (
    <>
      <option value={"1"}>1:00 AM</option>
      <option value={"2"}>2:00 AM</option>
      <option value={"3"}>3:00 AM</option>
      <option value={"4"}>4:00 AM</option>
      <option value={"5"}>5:00 AM</option>
      <option value={"6"}>6:00 AM</option>
      <option value={"7"}>7:00 AM</option>
      <option value={"8"}>8:00 AM</option>
      <option value={"9"}>9:00 AM</option>
      <option value={"10"}>10:00 AM</option>
      <option value={"11"}>11:00 AM</option>
      <option value={"12"}>12:00 AM</option>
      <option value={"13"}>1:00 PM</option>
      <option value={"14"}>2:00 PM</option>
      <option value={"15"}>3:00 PM</option>
      <option value={"16"}>4:00 PM</option>
      <option value={"17"}>5:00 PM</option>
      <option value={"18"}>6:00 PM</option>
      <option value={"19"}>7:00 PM</option>
      <option value={"20"}>8:00 PM</option>
      <option value={"21"}>9:00 PM</option>
      <option value={"22"}>10:00 PM</option>
      <option value={"23"}>11:00 PM</option>
    </>
  );
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center">Update Your Info</h1>
      <div className="max-w-xs mx-auto">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleSelectedValue}
        >
          <option value={"default"}>You are</option>
          <option value={"learner"}>Learner</option>
          <option value={"trainer"}>Trainer</option>
        </select>
        <form onSubmit={handleSubmit(onSubmitData)}>
          {selectedValue === "learner" && (
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="01234567890"
                  className="input input-bordered"
                  required
                  {...register("contactNumber")}
                />
              </div>
              <label className="label">
                <span className="label-text">Preferred Work Out Time</span>
              </label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">From</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="from"
                  required
                  {...register("from")}
                >
                  {timeOptions}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">To</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="to"
                  required
                  {...register("to")}
                >
                  {timeOptions}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="www.mdsalehinislam.netlify.app"
                  className="input input-bordered"
                  required
                  {...register("photoUrl")}
                />
              </div>
            </>
          )}
          {selectedValue === "default" && (
            <>
              <p>Please select a role...</p>
            </>
          )}
          {selectedValue === "trainer" && (
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="01234567890"
                  className="input input-bordered"
                  required
                  {...register("contactNumber")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Experience in the fitness industry
                  </span>
                </label>
                <input
                  type="text"
                  name="trainerExperience"
                  placeholder="5 years in fitness training"
                  className="input input-bordered"
                  required
                  {...register("trainerExperience")}
                />
              </div>
              <label className="label">
                <span className="label-text">
                  Preferred Time for Fitness Teaching
                </span>
              </label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">From</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="from"
                  required
                  {...register("from")}
                >
                  {timeOptions}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">To</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="to"
                  required
                  {...register("to")}
                >
                  {timeOptions}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="www.mdsalehinislam.netlify.app"
                  className="input input-bordered"
                  required
                  {...register("photoUrl")}
                />
              </div>
            </>
          )}
          <div className="form-control">
            <button
              className="btn btn-secondary"
              type="submit"
              disabled={!selectedValue || selectedValue === "default"}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

UpdateUserInfo.propTypes = {};

export default UpdateUserInfo;
