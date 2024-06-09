import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useUser from "../../../../Hooks/useUser";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const CheckOutForm = ({data}) => {
    const {user} = useUser()
    const navigate = useNavigate()
    const [cardError,setCardError] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState("")
    const [loading,setLoading] = useState(false)
    const {classId,email,price,myClass,image,_id} = data
    
    useEffect(()=>{
        if( data && data.price > 0){
            fetch('https://sportysummercamp.vercel.app/create-payment-intent',{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        }
},[data])


    const handleSubmit= async (event) =>{
        event.preventDefault();


        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return 
        }

        setLoading(true)
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card
        })

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }


          const {paymentIntent, error:confirmationError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || "anonymous",
                  email: user?.email
                },
              },
            },
          );
          if(confirmationError){
            setCardError(confirmationError.message)
          }
        
          if(paymentIntent.status == "succeeded"){
            ///

            const newPayment = {classId,email,price,myClass,image, paymentId:paymentIntent.id, selectClassId:_id, paymentDate:Date.parse(new Date)}

            fetch("https://sportysummercamp.vercel.app/payments",{
                method:"POST",
                headers: {
                    "content-type":"application/json"
                },
                body:JSON.stringify(newPayment)
            })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    toast.success('your Payment has been Successfully !')
                    setLoading(false)
                    navigate("/dashboard/paymentHistory")
                    
                }
            })


          }
    }


    return (
        <div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <form onSubmit={handleSubmit} className="mx-auto">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="flex justify-center">
      <button type="submit" disabled={!stripe || !clientSecret || loading} className="flex justify-center items-center" >
        
        {
            loading ? <span className="loading loading-infinity loading-md"></span> : "Pay Now"
        }
      </button>
      {
                cardError && <p className="text-red-500">{cardError}</p>
            }
      </div>
    </form>
           
        </div>
    );
};

export default CheckOutForm;