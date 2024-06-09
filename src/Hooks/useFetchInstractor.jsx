import { useEffect, useState } from "react";


const useFetchInstractor = () => {
    const [instractors,setInstractors] =useState([])
    const[loadingInstractor,setLoadingInstractor] = useState(true)
    useEffect(()=>{
            fetch('https://sportysummercamp.vercel.app/instractors')
            .then(res => res.json())
            .then(result =>{
                setInstractors(result)
                setLoadingInstractor(false)
            })
    },[])
    return (
       {instractors,loadingInstractor}
    );
};

export default useFetchInstractor;