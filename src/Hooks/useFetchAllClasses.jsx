import { useQuery } from "react-query";
import useUser from "./useUser";
import useAxios from "./AxiosHook/useAxios";

const useFetchAllClasses = () => {
        const {loading} = useUser()
        const AxiosSecure = useAxios()
        const {data:allClassesData=[],isLoading:allClassDataLoading,refetch }= useQuery({
                queryKey:['allclasses'],
                enabled: !loading,
                // queryFn: async() =>{
                //     const res = await fetch('https://sportysummercamp.vercel.app/classes')

                //     return res.json()
                // }

                queryFn: async() =>{
                    const res = await AxiosSecure('/classes')
                                return res.data
                }
        })
    return (
        {allClassesData, allClassDataLoading,refetch}
    );
};

export default useFetchAllClasses;