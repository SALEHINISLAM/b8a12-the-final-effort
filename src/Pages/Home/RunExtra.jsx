import React from 'react';

const RunExtra = () => {
    return (
        <div className='container mx-auto p-4 flex flex-col lg:flex-row justify-between gap-10 bg-[#222222] items-center rounded-md'>
            <div className="space-y-8 p-6 flex flex-col">
                <h2 className='text-5xl font-extrabold text-white'>
                Run an Extra <br />
                Mile Easily
                </h2>
                <p className='text-sm'>
                We believe fitness should be accessible to everyone, <br />everywhere, regardless of income or access ton <br />a gym. With hundreds of professional workouts.
                </p>
                <button className='btn btn-error rounded-full text-white text-lg'>
                Join Now
                </button>
            </div>
            <div className="p-6">
                <img src="https://i.postimg.cc/7ZP7L8X7/image.png" alt="" />
            </div>
        </div>
    );
};

export default RunExtra;