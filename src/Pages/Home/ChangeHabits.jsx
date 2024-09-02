import React from 'react';
import Heading from '../../SharedComponents/Heading';
import HabitCard from './HabitCard';

const ChangeHabits = () => {
    return (
        <div className='container mx-auto'>
            <Heading heading={'Change Your Habits'} subheading={'We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <HabitCard img={'https://i.postimg.cc/VLpmHXTh/image.png'} title={'Movement'} description={'We believe fitness should be accessible to everyone'}/>
                <HabitCard img={'https://i.postimg.cc/NMNSBL0y/image.png'} title={'Time'} description={'We believe fitness should be accessible to everyone'}/>
                <HabitCard img={'https://i.postimg.cc/4NtGbbdB/image.png'} title={'Practice'} description={'We believe fitness should be accessible to everyone'}/>
                <HabitCard img={'https://i.postimg.cc/4NtGbbdB/image.png'} title={'Weight Loss'} description={'We believe fitness should be accessible to everyone'}/>
            </div>
        </div>
    );
};

export default ChangeHabits;