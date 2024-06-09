import useFetchInstractor from "../../Hooks/useFetchInstractor";
import AllInstractorCard from "./AllInstractorCard/AllInstractorCard";
import {DotLoader} from "react-spinners"
// TODO: fetching instractor data 
const AllInstractors = () => {
    const {instractors,loadingInstractor} = useFetchInstractor()

    if(loadingInstractor){
        return <div className="w-full  flex justify-center items-center ">
        <DotLoader
    color="#5736d6"
    size={100}
  />
    </div>
    }
    return (
        <div className="pt-8 grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6">
                        
            {
                instractors.map(instractor => <AllInstractorCard key={instractor._id} instractor={instractor}/>)
            }
        </div>
    );
};

export default AllInstractors;