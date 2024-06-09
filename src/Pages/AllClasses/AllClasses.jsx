import useFetchApprovedClasses from "../../Hooks/useFetchApprovedClasses";
import AllClassesCard from "./AllClassesCard/AllClassesCard";
import {DotLoader} from "react-spinners"

const AllClasses = () => {
    const {showApprovedClass,showLoadingClasses} = useFetchApprovedClasses()
    if(showLoadingClasses){
        return <div className="w-full  flex justify-center items-center">
        <DotLoader
    color="#5736d6"
    size={100}
  />
    </div>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 my-12 p-6">
                
                {
                    showApprovedClass.map(classesData => <AllClassesCard key={classesData._id} classesData={classesData}/>)
                }
        </div>
    );
};

export default AllClasses;