
import useFetchInstractor from '../../../Hooks/useFetchInstractor';
import PopularInstractorCard from './PopularInstractorCard/PopularInstractorCard';
// TODO: get popular instractor data and show 
const PopularInstractor = () => {
    const {instractors,loadingInstractor} = useFetchInstractor()
    const topInstractors = instractors.slice(0,6)

    if(loadingInstractor){
        "Loading....."
    }
    return (
        <div className='py-6'>
            <h2 className="text-center text-6xl font-bold my-8"> Our Popular <span className='text-blue-500'>Instarctor</span> </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 m-6 gap-8">
                    
                    {
                        topInstractors.map(instractor => <PopularInstractorCard key={instractor._id} instractor={instractor}/>)
                    }

            </div>
        </div>
    );
};

export default PopularInstractor;