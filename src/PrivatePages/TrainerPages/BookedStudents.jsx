import React, { useEffect, useState } from "react";
import TrainerStudentTable from "../../SharedComponents/TrainerStudentTable";
import useBookingDataForTrainer from "../../hooks/useBookingDataForTrainer";
import { timing } from "../../SharedComponents/Timing";

const BookedStudents = () => {
  const { bookingInfo, isLoading, error, refetch } = useBookingDataForTrainer();
  const [stu, setStu]=useState()
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
    return <p className="text-error">Error occurs handling the request...</p>;
  }
  useEffect(()=>{
    setStu(bookingInfo);
    console.log(stu);
  },[bookingInfo])
  return (
    <div className="container mx-auto">
      <h2 className="py-6 text-5xl font-bold">Interested Students</h2>
      <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookingInfo?.map((info, index) => (<tr key={index}>
                  <th>{index + 1}</th>
                  <td className="lowercase">{info.bookedBy}</td>
                  <td>{timing(info.time)}</td>
                  <td className="uppercase">{info.payment}</td>
                </tr>))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default BookedStudents;
