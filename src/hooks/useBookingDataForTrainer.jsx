import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useBookingDataForTrainer = () => {
    const {user, loading}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure();
    const {data, isLoading, error,refetch}=useQuery({
        queryKey:[user,"trainerInfo"],
        queryFn:async()=>{
            if (!user || loading) {
                return null
            }
            const response= await axiosSecure(`/getMyLearner?email=${user.email}`)
            return {bookingInfo: response.data}
        }
    })
    return {bookingInfo:data?.bookingInfo, isLoading, error, refetch }
};

export default useBookingDataForTrainer;