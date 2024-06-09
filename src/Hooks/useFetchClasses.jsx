import { useQuery } from "react-query";
import useUser from "./useUser";


const useFetchClasses = () => {
    
    const {loading, user} = useUser()
        const {data:myClassData=[],isLoading:myClassLoading}= useQuery({
            queryKey:["my-class"],
            enabled: !loading,
            queryFn: async() =>{
                    const res =await fetch(`https://sportysummercamp.vercel.app/classes/${user?.email}`)
                    return res.json()
            }
        })

    return (
        {myClassData,myClassLoading}
    );
};

export default useFetchClasses;