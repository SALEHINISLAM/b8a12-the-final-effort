import React from "react";
import PropTypes from "prop-types";

const Trainer = ({ img, name }) => {
  return (
    <div className="relative w-full h-full">
      <img src={img} alt="" className="w-full h-full rounded-xl" />
      <div className="absolute bottom-3 left-3">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <h4>Trainer</h4>
      </div>
    </div>
  );
};

Trainer.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string
};

export default Trainer;
