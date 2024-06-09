import { useLocation } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import "./paymentGetWay.css"

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISH_KEY);

const PaymentGetWay = () => {
    const location = useLocation()
    
    const {data} = location.state
   

    

    
    return (
        <div>
                <h2 className="text-center text-3xl font-semibold">Please Payment for Your Course</h2>


                 <Elements stripe={stripePromise}>
                            <CheckOutForm data={data}/>
                        </Elements>
        </div>
    );
};

export default PaymentGetWay;