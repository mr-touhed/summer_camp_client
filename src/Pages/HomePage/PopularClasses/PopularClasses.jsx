
import PopularClassCard from "./PopularClassCard/PopularClassCard";
import usePublicClasses from "../../../Hooks/usePublicClasses";

// TODO: load Popular Classes and show data from server 
const PopularClasses = () => {
    const {classes} = usePublicClasses()
    const sixData = classes.slice(0,6)
    return (
        <div className="mt-6">
            <h2 className="text-center text-6xl font-bold my-6"> Our Popular <span className='text-blue-500'>Classes</span> </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 m-6 gap-y-8">
                
                {
                    sixData.map(classData => <PopularClassCard key={classData._id} classData={classData}/>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;