import Lottie from "lottie-react";
import animation from "../../assets/icons/children-playing.json"
import { Slide } from "react-awesome-reveal";
const DashBoardHome = () => {
    return (
        <div>
            <Slide direction="down" >
                    <div className="flex flex-col justify-center  items-center">
                    <h2 className="text-4xl text-center mt-8 ">Welcome To Sporty Summer Camp</h2>
                    <Lottie animationData={animation} loop={true} />
                    </div>
            </Slide>
            
        </div>
    );
};

export default DashBoardHome;