import { FcGoogle } from "react-icons/fc";
import useUser from "../Hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";
const SocialButton = () => {
    const {googleSign} = useUser()
    const loaction = useLocation()
    const navigate = useNavigate()
    
    const  from = loaction?.state?.from?.pathname ||  "/"
    const googleSignIN = () =>{
        googleSign()
        .then( (result) =>{
                if(result.user){
                    const {displayName,email,photoURL} = result.user
                        
                    const newUser = {name:displayName,email,image:photoURL,role:"student"}
                   
            fetch('https://sportysummercamp.vercel.app/users',{
              method: "POST",
              headers:{
                "content-type": "application/json"
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(() => {
                
                 
                    navigate(from,{replace:true})
                  
                
              })
                    
                }
            
        })
    }
    return (
        <button className="btn  btn-outline" onClick={googleSignIN}>
                <FcGoogle className="w-10 h-10"/> login with google
            </button>
    );
};

export default SocialButton;