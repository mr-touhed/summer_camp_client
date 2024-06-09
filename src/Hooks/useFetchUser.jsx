import { useQuery } from "react-query";
import useUser from "./useUser";


const useFetchUser = () => {
    const {user,loading} = useUser()
            const {data:AllUserData=[],isLoading:userLoading,refetch} = useQuery({
                queryKey:["user"],
                enabled: !loading,
                queryFn: async () =>{
                   const res = await fetch('https://sportysummercamp.vercel.app/users')
                        return res.json()
                }
            })
    return (
        {AllUserData,userLoading,refetch}
    );
};

export default useFetchUser;