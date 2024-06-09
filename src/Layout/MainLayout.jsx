import { Outlet } from "react-router-dom";
import MenuBar from "../sharedPage/MenuBar";
import Footer from "../sharedPage/Footer";
import useUser from "../Hooks/useUser";
import animation from "../assets/icons/children-playing.json"
import Lottie from "lottie-react";
const MainLayout = () => {
    const {loading} = useUser()

    if(loading){
       return  <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-6xl mb-6">Welcome To Sporty Summer Camp</h2>
        <div className="">
        <Lottie animationData={animation} loop={true} />
        </div>
    </div>
    }
    return (
        <>
        <MenuBar/>
        <div className="min-h-[calc(100vh-292px)]">
            <Outlet/>
        </div>
        <Footer/>
        </>
    );
};

export default MainLayout;