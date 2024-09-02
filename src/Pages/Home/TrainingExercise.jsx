import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../SharedComponents/Heading';

const TrainingExercise = props => {
    return (
        <div className='container mx-auto'>
            <Heading heading={'Trainings and Exercises'} subheading={'We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.'}/>
            <div className="">
                <div className="flex flex-row w-full">
                    <div className='w-1/4 h-auto'>
                        <img src="https://i.ibb.co/QY4bYvj/6aa7b821c522b6a2467d7e8718a2e9b3.jpg" alt="" className='h-full w-full'/>
                    </div>
                    <div className='w-1/2 h-auto'>
                        <img src="https://i.ibb.co/DYrT12J/313efb204c6dd4cc7945c72f4164807a.png" alt="" className='h-full w-full'/>
                    </div>
                    <div className='w-1/4'>
                        <img src="https://i.ibb.co/0tsD2dB/9126a888d13b13cab0ea6acbe03ded4a.png" alt="" className='w-full h-full'/>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/kyc5r4Q/74d5bc4f4918258156dba59603fe0f2a.png" alt="" className='w-full h-full'/>
                    </div>
                    <div className="w-1/4">
                        <img src="https://i.ibb.co/B3qJTgd/171e0f1f5e34010049702ffece407622.jpg" alt="" className='w-full h-full'/>
                    </div>
                    <div className="w-1/4">
                        <img src='https://i.ibb.co/mqxr089/c6edbf13bf0b2c524a6f8867e82ffb67-1.jpg' alt="" className='w-full h-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

TrainingExercise.propTypes = {
    
};

export default TrainingExercise;