import React from "react";
import PropTypes from "prop-types";
import Heading from "../../SharedComponents/Heading";

const TrainingExercise = (props) => {
  return (
    <div className="container mx-auto p-4">
      <Heading
        heading={"Trainings and Exercises"}
        subheading={
          "We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym."
        }
      />
      <div className="">
        <div className="flex flex-row w-full">
          <div className="w-3/5 md:w-1/4 h-auto relative ">
            <img
              src="https://i.ibb.co/QY4bYvj/6aa7b821c522b6a2467d7e8718a2e9b3.jpg"
              alt=""
              className="h-full w-full"
            />
            <div className="h-full absolute bg-[#06FFD280] top-0 left-0 right-0 bottom-0"></div>
            <p className="absolute bottom-4 text-black left-4">Lorem Ipsum</p>
          </div>
          <div className="w-2/5 md:w-1/2 h-auto relative">
            <img
              src="https://i.ibb.co/DYrT12J/313efb204c6dd4cc7945c72f4164807a.png"
              alt=""
              className="h-full w-full"
            />
            <div className="h-full absolute bg-[#FF00004D] top-0 left-0 right-0 bottom-0"></div>
            <p className="absolute top-4 text-white left-4 ">Lorem Ipsum</p>
          </div>
          <div className="md:w-1/4 relative hidden md:flex">
            <img
              src="https://i.ibb.co/0tsD2dB/9126a888d13b13cab0ea6acbe03ded4a.png"
              alt=""
              className="w-full h-full"
            />
            <div className="h-full absolute bg-[#CCCCCC] bg-opacity-40 top-0 left-0 right-0 bottom-0"></div>
            <p className="absolute bottom-4 text-white left-4 ">
              Leg Press: Works the <br /> quadriceps and glutes
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/5 md:w-1/2 relative">
            <img
              src="https://i.ibb.co/kyc5r4Q/74d5bc4f4918258156dba59603fe0f2a.png"
              alt=""
              className="w-full h-full"
            />
            <div className="h-full absolute bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0"></div>
            <p className="absolute top-4 text-white right-4 ">
              Leg Press: Works the <br /> quadriceps and glutes
            </p>
          </div>
          <div className="w-3/5 md:w-1/4 relative">
            <img
              src="https://i.ibb.co/B3qJTgd/171e0f1f5e34010049702ffece407622.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="h-full absolute bg-[#42FF00] bg-opacity-30 top-0 left-0 right-0 bottom-0"></div>
            <p className="absolute bottom-4 text-white left-4 ">
              Leg Press: Works the <br /> quadriceps and glutes
            </p>
          </div>
          <div className="md:w-1/4 relative hidden md:flex">
            <img
              src="https://i.ibb.co/mqxr089/c6edbf13bf0b2c524a6f8867e82ffb67-1.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="h-full absolute bg-[#0047FF4D]   top-0 left-0 right-0 bottom-0"></div>
            <p className="absolute bottom-4 text-white left-4 ">
              Leg Press: Works the <br /> quadriceps and glutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

TrainingExercise.propTypes = {};

export default TrainingExercise;
