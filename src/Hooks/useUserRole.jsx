


import useAxios from "./AxiosHook/useAxios";
import useUser from "./useUser";
import { useQuery } from "react-query";


const useUserRole = () => {
    const {user, loading} = useUser()
    const AxiosSecure = useAxios()
    
    // const {data:role={}, isLoading:roleLoading} = useQuery({
    //     queryKey:['user-role', user?.email],
    //     enabled: !loading || user?.email,
    //     queryFn: async () =>{
    //         const res = await fetch(`https://sportysummercamp.vercel.app/userRole/${user?.email}`)
    //         const result = await res.json()
    //         return result.userRole
    //     }
    // })
    
    const {data: role={}, isLoading:roleLoading } = useQuery({
        queryKey:['user-role', user?.email],
        enabled: !loading,
        queryFn: async () =>{
                try{
                    const res = await AxiosSecure(`userRole/${user?.email}`)
                
                return res.data.userRole
                }catch{
                    error => console.log(error.response.status)
                    return "visitor"
                }
        }
    })
   

    return (
        {role,roleLoading}
    );
};

export default useUserRole;