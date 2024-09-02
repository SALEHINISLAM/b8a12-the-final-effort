import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content p-0 flex-col lg:flex-row-reverse">
          <div className="relative lg:w-1/2">
            <img
              src="https://i.postimg.cc/MT2W7MYC/clipboard-2024-09-02-22-04.png"
              className="rounded-lg w-full"
            />
            <div className="bg-[#FFFFFF1A] p-4 rounded-lg absolute top-56 right-0 text-center ">
              <h2 className="text-white text-4xl font-bold">500+</h2>
              <p className="text-sm text-[#FFFFFFA6]">Free Workout Videos</p>
            </div>
            <div className="bg-[#FFFFFF1A] p-4 rounded-lg absolute bottom-16 left-0 text-center ">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#E6533C] rounded-full w-10 h-10"></div>
                <div>
                  <h2 className="text-white text-4xl font-bold">350+</h2>
                  <p className="text-sm text-[#FFFFFFA6]">Video tutorial</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-7xl font-bold">
              Get body in <br /> <span className="font-playWrite">Shape</span> &
              stay <br /> healthy
            </h1>
            <p className="py-6">
              A huge selection of health and fitness content, healthy recipes
              and transformation stories to help you get fit and stay fit!
            </p>
            <div className=" flex flex-col md:flex-row gap-4 w-full">
            <button className="btn btn-error rounded-full text-white text-lg px-10">Join Club Now!</button>
            <button className="btn btn-outline rounded-full text-lg px-10">Download App</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
