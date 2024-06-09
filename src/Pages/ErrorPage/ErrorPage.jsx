import Lottie from "lottie-react";
import errorImg from "../../assets/page-not-found-404.json"
import { Link } from "react-router-dom";
const ErrorPage = () => {
    // TODO: Error image went to full height
    return (
        <>
        <div className="text-right mt-6 mr-6">
            <Link className="btn">Back to home</Link>
        </div>
        <div >
            <Lottie animationData={errorImg} loop={true} height='80'></Lottie>
        </div>
        </>
    );
};

export default ErrorPage;