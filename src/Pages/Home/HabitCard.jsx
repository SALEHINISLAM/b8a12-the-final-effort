import React from "react";
import PropTypes from "prop-types";

const HabitCard = ({img,title,description}) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img? img : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
            alt="habits"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title ? title :'Shoes!'}</h2>
          <p>{description? description: 'If a dog chews shoes whose shoes does he choose?'}</p>
        </div>
      </div>
    </div>
  );
};

HabitCard.propTypes = {
    img: PropTypes.string,
    title:PropTypes.string,
    description: PropTypes.string
};

export default HabitCard;
