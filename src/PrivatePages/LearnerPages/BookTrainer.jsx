import React from "react";
import PropTypes from "prop-types";
import useFindTrainer from "../../hooks/useFindTrainer";
import { timing } from "../../SharedComponents/Timing";
import { RiDeleteBinFill } from "react-icons/ri";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BookTrainer = (props) => {
  const axiosSecure = useAxiosSecure();
  const { bookedTrainer, isLoading, error, refetch } = useFindTrainer();
  if (isLoading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  }
  if (error) {
    return <p className="text-error">Error occurs handling the event</p>;
  }
  const handleDelete = async (id) => {
    console.log(id);
    const response = await axiosSecure.delete(`/deleteBookedItem/${id}`);
    console.log(response.data);
    if (response.data.deletedCount > 0) {
      Swal.fire("Deleted Successful");
      refetch()
    }
  };
  
  return (
    <div className="container mx-auto">
      <h2>My Booked Trainer</h2>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Trainer</th>
                <th>Name</th>
                <th>Time</th>
                <th>Payment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookedTrainer?.length === 0
                ? "No trainer Found"
                : bookedTrainer?.map((trainer, index) => (
                    <tr key={index}>
                      <th>
                        <img
                          src={trainer?.photoUrl}
                          alt=""
                          className="w-16 h-26 rounded-md"
                        />
                      </th>
                      <td>{trainer?.trainerName}</td>
                      <td>{timing(trainer?.time)}</td>
                      <td>
                        {trainer?.payment === "unpaid" ? (
                          <a href={`/dashboard/payNow/${trainer._id}`} className="btn btn-outline">
                            Pay 27$ Now
                          </a>
                        ) : (
                          "Payment Completed"
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-circle btn-error"
                          onClick={() => handleDelete(trainer._id)}
                        >
                          <RiDeleteBinFill className="size-6" />
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

BookTrainer.propTypes = {};

export default BookTrainer;
