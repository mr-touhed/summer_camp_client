import  { useState } from 'react';

const usePublicClasses = () => {
    const [classes,setClasses] = useState([])

    fetch('https://sportysummercamp.vercel.app/showAllClasses')
    .then(res => res.json())
    .then(data => setClasses(data))
    return (
        {classes}
    );
};

export default usePublicClasses;