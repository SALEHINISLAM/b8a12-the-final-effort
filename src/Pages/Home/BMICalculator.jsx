import React, { useState } from "react";
import Heading from "../../SharedComponents/Heading";
import { useForm } from "react-hook-form";

const BMICalculator = () => {
  const [bmi, setBmi] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setBmi(0)
    console.log(data);
    const userBmi = (parseFloat(data.weight)) / ((parseFloat(data.height)/100) ^ 2);
    setBmi(userBmi.toFixed(2))
    resetField("weight")
    resetField("height")
  };
  return (
    <div className="bg-[#222222]">
      <div className="container mx-auto">
        <Heading
          heading={"BMI Calculator"}
          subheading={
            "We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym."
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          <div className="overflow-x-auto">
            <table className="table border border-white" border={"10px"}>
              <caption className="text-3xl font-bold text-white py-6">
                BMI Calculator Chart
              </caption>
              <thead>
                <tr>
                  <th className="border border-[#FFFFFF1A]">BMI</th>
                  <th className="border border-[#FFFFFF1A]">Weight Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#FFFFFF1A]">Below 18.5</td>
                  <td className="border border-[#FFFFFF1A]">Underweight</td>
                </tr>
                <tr>
                  <td className="border border-[#FFFFFF1A]">18.5 - 24.9</td>
                  <td className="border border-[#FFFFFF1A]">Healthy</td>
                </tr>
                <tr>
                  <td className="border border-[#FFFFFF1A]">25.0 - 29.9</td>
                  <td className="border border-[#FFFFFF1A]">Overweight</td>
                </tr>
                <tr>
                  <td className="border border-[#FFFFFF1A]">
                    30.0 - and Above
                  </td>
                  <td className="border border-[#FFFFFF1A]">Obese</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Calculate your BMI
            </h2>
            <p className="text-xs">
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Height in cm(integer value is recommended)
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="height in cm"
                    className="input input-bordered"
                    name="height"
                    {...register("height", { required: true })}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Weight in kg(integer value is recommended)
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="weight in kg"
                    className="input input-bordered"
                    name="weight"
                    {...register("weight", { required: true })}
                    required
                  />
                </div>
              </div>
              <button
                className="btn mt-6 btn-error rounded-full px-7 text-white"
                type="submit"
              >
                Calculate
              </button>
            </form>
            <input
              type="number"
              name=""
              className="input input-bordered"
              id=""
              defaultValue={bmi}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
