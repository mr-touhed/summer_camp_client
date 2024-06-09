import React from 'react';
import loginImg from "../assets/login.json"
import Lottie from "lottie-react";
const UserAnimate = ({className}) => {
    return (
        <div className={className}>
            <Lottie animationData={loginImg} loop={true} />
        </div>
    );
};

export default UserAnimate;