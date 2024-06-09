
import { useQuery } from 'react-query';
import useUser from './useUser';

const useFetchApprovedClasses = () => {
        const {loading} = useUser()
        const {data:showApprovedClass=[],isLoading:showLoadingClasses} = useQuery({
            queryKey:["approved-class"],
            enabled: !loading,
            queryFn: async() =>{
                const res =await fetch('https://sportysummercamp.vercel.app/showAllClasses')
                return res.json()
            }
        })
    return (
        {showApprovedClass,showLoadingClasses}
    );
};

export default useFetchApprovedClasses;