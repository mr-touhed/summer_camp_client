import axios from "axios";
import { useEffect } from "react";



const useAxiosSecure = axios.create({
    baseURL: 'https://sportysummercamp.vercel.app'
})

const useAxios = () => {

    useEffect(()=>{
        useAxiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('user-token')
            if(token){
                config.headers.Authorization=`bearer ${token}`
            }
           return config
        })


    },[])

    return (
       useAxiosSecure
    );
};

export default useAxios;