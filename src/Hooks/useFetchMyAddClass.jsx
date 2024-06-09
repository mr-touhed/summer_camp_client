import { useQuery } from "react-query";
import useUser from "./useUser";


const useFetchMyAddClass = () => {
        const {user,loading} = useUser()
        const {data:myAddClass=[],isLoading:loadingMyAddClass,refetch} = useQuery({
            queryKey:["my-addClass",user?.email],
            enabled: !loading,
            queryFn: async() =>{
                const res =await fetch(`https://sportysummercamp.vercel.app/addedClass/${user?.email}`)
                return res.json()
            }
        })

    return (
        {myAddClass,loadingMyAddClass,refetch}
    );
};

export default useFetchMyAddClass;