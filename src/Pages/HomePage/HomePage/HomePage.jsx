import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractor from "../PopularInstractor/PopularInstractor";
import TopSlider from "../TopSlider/TopSlider";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";


const HomePage = () => {
    return (
        <div>
            <TopSlider/>
            <PopularClasses/>
            <PopularInstractor/>
            <WhyChooseUs/>
        </div>
    );
};

export default HomePage;