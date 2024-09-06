import React from "react";
import PropTypes from "prop-types";
import { timing } from "./Timing";

const MyTrainerSingle = ({ value }) => {
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={
                value
                  ? value.photoUrl
                  : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              }
              alt="my trainer"
              className="h-full w-full rounded-3xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{value && value.trainerName}</h2>
            <p>{value && value.trainerExperience}</p>
            <button className="btn btn-error">
              Time: {timing(value?.time)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyTrainerSingle.propTypes = {
  value: PropTypes.object,
};

export default MyTrainerSingle;
