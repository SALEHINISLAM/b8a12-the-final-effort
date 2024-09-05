import React from "react";
import PropTypes from "prop-types";

const Trainer = ({ value }) => {
  return (
    <div className="relative w-full h-full">
      <img src={value?.photoUrl} alt="" className="w-full h-full rounded-xl" />
      <div className="absolute bottom-3 left-3">
        <h3 className="text-xl font-bold text-white">{value?.name}</h3>
        <h4>Trainer</h4>
      </div>
    </div>
  );
};

Trainer.propTypes = {
    value: PropTypes.object
};

export default Trainer;
