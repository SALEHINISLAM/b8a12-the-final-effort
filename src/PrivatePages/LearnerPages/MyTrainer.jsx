import React, { useEffect, useState } from 'react';
import useFindTrainer from '../../hooks/useFindTrainer';
import MyTrainerSingle from '../../SharedComponents/MyTrainerSingle';

const MyTrainer = () => {
    const {
        userEmail,
        userName,
        bookedTrainer,
        isLoading,
        error,
        refetch,
      } = useFindTrainer();
      const [myTrainer, setMyTrainer]=useState([])
      if (isLoading) {
        <>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </>
      }
      if (error) {
        <p className="text-error">Error fetching data</p>
      }
      useEffect(()=>{
        const trainers=bookedTrainer?.filter(trainer=>trainer.payment==="paid");
        setMyTrainer(trainers)
      },[bookedTrainer])
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl font-bold'>
                My Trainer
            </h1>
            {
                myTrainer?.length===0 ? 'You do not confirmed any trainer' : <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {myTrainer?.map((trainer,index)=><MyTrainerSingle value={trainer} key={index}/>)}
                </div>
            }
        </div>
    );
};

export default MyTrainer;