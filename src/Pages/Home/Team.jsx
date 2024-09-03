import React, { useState } from 'react';
import Heading from '../../SharedComponents/Heading';
import Trainer from './Trainer';

const Team = () => {
    return (
        <div className='p-4 container mx-auto bg-[#FFFFFF1A] rounded-2xl'>
            <Heading heading={"Meet Our Team"} subheading={"We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym."}/>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Trainer img={"https://i.postimg.cc/435yhH4W/4241f9ea0454146f8422ce49bf6aec2c.png"} name={"Jerome Bell"}/>
            </div>
        </div>
    );
};

export default Team;