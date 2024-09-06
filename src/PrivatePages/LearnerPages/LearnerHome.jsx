import React from "react";
import useFindTrainer from "../../hooks/useFindTrainer";

const LearnerHome = () => {
    const {
        userEmail,
        userName,
        possibleTrainer,
        bookedTrainer,
        isLoading,
        error,
        refetch,
      } = useFindTrainer();
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
        return <p className="text-error">
            Error occurs handling the request...
        </p>
      }
  return (
    <div className="container mx-auto py-12">
      <h2 className="py-6 text-5xl font-bold">Learner Home</h2>

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
              <h2 className="card-title">
                {possibleTrainer && possibleTrainer?.length}+
              </h2>
              <p>Trainer have suitable slot for you</p>
              <div className="card-actions">
                <a
                  className="btn btn-primary"
                  href="/dashboard/findTrainer"
                >
                  See All
                </a>
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
              <h2 className="card-title">
                {bookedTrainer &&
                  bookedTrainer.filter((trainer) => trainer.payment === "unpaid")
                    .length}
                +
              </h2>
              <p>Booked Trainer Slot to confirm</p>
              <div className="card-actions">
                <a className="btn btn-primary" href="/dashboard/bookedTrainer">
                  See All
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/g0kFgsz1/care-male-healthy-weights-athletic.jpg"
                alt="dollar"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
              {bookedTrainer &&
                  bookedTrainer.filter((trainer) => trainer.payment === "paid")
                    .length}
                +
              </h2>
              <p>My Training Slot</p>
              <div className="card-actions">
                <a className="btn btn-primary" href="/dashboard/myTrainer">
                  See All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerHome;
