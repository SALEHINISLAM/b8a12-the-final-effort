import React from "react";
import useBookingDataForTrainer from "../../hooks/useBookingDataForTrainer";

const TrainerHome = () => {
  const {bookingInfo, isLoading, error, refetch}=useBookingDataForTrainer()
  if (isLoading) {
    return <>
    <span className="loading loading-bars loading-xs"></span>
    <span className="loading loading-bars loading-sm"></span>
    <span className="loading loading-bars loading-md"></span>
    <span className="loading loading-bars loading-lg"></span>
  </>
  }
  if (error) {
    return <p className="text-error">
        Error occurs handling the request...
    </p>
  }
  return (
    <div className="container mx-auto py-12">
      <h2 className="py-6 text-5xl font-bold">
      Trainer Home
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="text-white">
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/3xkWPWqd/people-working-out-indoors-together-with-dumbbells.jpg"
                alt="learner"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{bookingInfo && bookingInfo?.length}+</h2>
              <p>Students want training from you </p>
              <div className="card-actions">
                <a className="btn btn-primary" href="/dashboard/interestedStudents">See All</a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/Y0ctgxWB/couple-training-together-gym.jpg"
                alt="learner"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{bookingInfo && bookingInfo.filter(trainer=>trainer.payment==="paid").length}+</h2>
              <p>Paid Students</p>
              <div className="card-actions">
                <a className="btn btn-primary" href="/dashboard/myLearner">See All</a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/YqHpCb71/american-dollars-cash-money-sack-black-table-dark-room.jpg"
                alt="dollar"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">$ {bookingInfo && parseInt(bookingInfo.filter(trainer=>trainer.payment==="paid").length)*27}+</h2>
              <p>Remaining in your account</p>
              <div className="card-actions">
                <a className="btn btn-primary" href="/dashboard/myLearner">See All</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrainerHome;
