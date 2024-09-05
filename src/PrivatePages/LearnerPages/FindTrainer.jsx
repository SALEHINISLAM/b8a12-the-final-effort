import React from "react";
import useFindTrainer from "../../hooks/useFindTrainer";
import TrainerCard from "../../SharedComponents/TrainerCard"
const FindTrainer = () => {
  const { userName, userEmail, possibleTrainer, isLoading, error, refetch } =
    useFindTrainer();
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
  return <div className="container mx-auto">
    <h1 className="text-5xl font-bold text-center">
      Find Your Next Fitness Trainer
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        possibleTrainer? possibleTrainer?.map((trainer, index)=><TrainerCard key={index} value={trainer} userEmail={userEmail}/>):'No Trainer Available in your suitable time'
      }
    </div>
  </div>;
};

export default FindTrainer;
