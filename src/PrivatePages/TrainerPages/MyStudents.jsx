import React from "react";
import TrainerStudentTable from "../../SharedComponents/TrainerStudentTable";
import useBookingDataForTrainer from "../../hooks/useBookingDataForTrainer";

const MyStudents = () => {
  const { bookingInfo, isLoading, error, refetch } = useBookingDataForTrainer();
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

  return <div className="container mx-auto">
<h2 className="py-6 text-5xl font-bold">My Students</h2>
<div className="">
    <TrainerStudentTable value={bookingInfo && bookingInfo.filter(trainer=>trainer.payment==="paid")}/>
</div>
  </div>;
};

export default MyStudents;
