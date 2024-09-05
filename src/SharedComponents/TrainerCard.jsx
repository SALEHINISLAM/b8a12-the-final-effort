import React from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useFindTrainer from "../hooks/useFindTrainer";

const TrainerCard = ({ value,userEmail }) => {
  const axiosSecure=useAxiosSecure()
  const {refetch}=useFindTrainer();
  function timing(slot) {
    const timeSlot = parseInt(slot);
    if (parseInt(slot) > 12) {
      const realTime = parseInt(slot) - 12;
      return `${realTime}:00 PM to ${realTime + 1}:00 PM`;
    }
    if (parseInt(slot) === 12) {
      return `${slot}:00 AM to 01:00 PM`;
    }
    return `${timeSlot}:00 AM to ${timeSlot + 1}:00 AM`;
  }
  const handleBooking=async(e)=>{
    e.preventDefault()
    const form=new FormData(e.currentTarget)
    const bookingTime=form.get("bookingTime")
    console.log(form.get("bookingTime"))
    const bookingInfo={bookedBy:userEmail, trainerId:value?._id, photoUrl: value?.photoUrl, price:27, payment:"unpaid", trainerName: value?.name, time:bookingTime}
    const response=await axiosSecure.post('/bookedTrainer', bookingInfo)
    if (response.data.insertedId) {
      Swal.fire("You have successfully booked trainer . Now Please pay 27$ to confirm your trainer...")
      refetch()
    }
  }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={
              value
                ? value.photoUrl
                : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p className="text-3xl font-semibold">Price: $27</p>
          <h2 className="card-title">{value && value.name}</h2>
          <p>{value && value.trainerExperience}</p>
          <p>Available Slots</p>
          <ul>
            {value &&
              value.slot?.map((slots, index) => (
                <li key={index}>{timing(slots)}</li>
              ))}
          </ul>
          <div className="card-actions justify-end">
            <a className="btn btn-primary" href={`#${value?._id}`}>
              Book Now
            </a>
          </div>
          <div className="modal" role="dialog" id={`${value && value._id}`}>
            <div className="modal-box">
              <h3 className="text-lg font-bold">
                Please select a time for training...
              </h3>
              <form onSubmit={handleBooking}>
              <select className="select select-bordered w-full max-w-xs" name="bookingTime">
                {
                  value.slot?.map((slots, index) => (
                    <option key={index} value={slots}>{timing(slots)}</option>
                  ))
                }
              </select>
              <button className="btn btn-success" type="submit">
                  Book this trainer
                </button>
              </form>
              <div className="modal-action">
                <a href="#" className="btn btn-error">
                  Cancel
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TrainerCard.propTypes = {
  value: PropTypes.object,
};

export default TrainerCard;
