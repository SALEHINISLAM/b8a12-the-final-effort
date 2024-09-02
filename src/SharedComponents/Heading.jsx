import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({heading, subheading}) => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl text-center font-extrabold'>
                {heading? heading :"hello"}
            </h1>
            <p className='text-xs text-center'>
                {subheading? subheading :'hello'}
            </p>
        </div>
    );
};

Heading.propTypes = {
    heading:PropTypes.string,
    subheading: PropTypes.string
};

export default Heading;