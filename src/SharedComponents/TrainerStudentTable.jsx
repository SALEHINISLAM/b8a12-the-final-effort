import React from "react";
import PropTypes from "prop-types";
import { timing } from "./Timing";

const TrainerStudentTable = ({ value }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Time</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {value &&
              value.map((info, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="lowercase">{info?.bookedBy}</td>
                  <td>{timing(info?.time)}</td>
                  <td>
                    $ 27
                  </td>
                  <td className="uppercase">{info?.payment}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TrainerStudentTable.propTypes = {
  value: PropTypes.array.isRequired,
};

export default TrainerStudentTable;
