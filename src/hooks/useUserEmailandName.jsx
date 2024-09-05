import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useUserEmailAndName = () => {
    const {user, loading}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const {data, isLoading, error, refetch}=useQuery({
        queryKey:[user, "ourUser"],
        queryFn: async()=>{
            if (loading || !user) {
                return null
            }
            const userEmail=user.email;
            const userName=user.displayName;
            const existingUser=await axiosPublic.get(`/existUser?email=${userEmail}`)
            if (existingUser) {
                return {userName:userName, userEmail: userEmail, existingUser:existingUser}
            }
            return {userName:userName, userEmail: userEmail, existingUser:null}
        }
    })
    return {userName: data?.userName, userEmail:data?.userEmail,existingUser:data?.existingUser, isLoading, error, refetch}
};

export default useUserEmailAndName;