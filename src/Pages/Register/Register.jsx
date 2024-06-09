import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialButton from "../../sharedPage/SocialButton";
import UserAnimate from "../../sharedPage/UserAnimate";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import { useState } from "react";
import useUser from "../../Hooks/useUser";
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const [isShow,setisShow] = useState(false)
  const {createUser,updateUser,loading} = useUser()
  const location = useLocation()
  const navigate = useNavigate()
//  TODO: Stor User Databes 

  const from = location?.state?.from?.pathname || "/"

  const onSubmit = data => {
      const {name,email,foto,confirm_Password,password} = data
    
    if(password !== confirm_Password){
     return  toast.error("sorry! password doesn't match")
    }
    createUser(email,password)
    .then( () =>{
        updateUser(name,foto)
        .then( () =>{
            const newUser = {name,email,image:foto,role:"student"}
            fetch('https://sportysummercamp.vercel.app/users',{
              method: "POST",
              headers:{
                "content-type": "application/json"
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                  toast.success("register successfully")
                  navigate(from,{replace:true})
                }
              
            })
        })
    })
    .catch((errors) =>{
      
      toast.error(`${errors}`)
      
    })
    
  }



  return (
    <div className="md:flex  justify-around items-center ">
        <UserAnimate className="w-50"/>
      <div className="md:w-2/4 md:p-24">
      
            <div className="text-center md:mb-4 md:mt-6">
                <SocialButton/>
            </div>
            <div className="divider">OR</div>
        
      <form action="" className=" md:space-y-3 p-6 pt-0 " onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">your Name</span>
          </label>
          <input
          {...register("name", { required: true })}
            type="text"
            placeholder="Type your name"
            className="input input-bordered input-primary w-full "
          />
          {errors.name && <small className="text-red-500">This field is required</small>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">your Email</span>
          </label>
          <input
          {...register("email", { required: true })}
            type="text"
            placeholder="Type your Email"
            className="input     input-primary w-full "
          />
          {errors.email && <small className="text-red-500">This field is required</small>}
        </div>
        
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">your Password</span>
          </label>
          <div className="flex items-center">
          <input 
          {...register("password", { required: true , pattern: /^(?=.*[A-Z])(?=.*[\W_])(?=.{6,})/ })}
            type={isShow ? "text" : "password"}
            placeholder="Type password"
            className="input input-bordered input-primary w-full "
          />
          
          {
            isShow ? <AiFillEyeInvisible className="-ml-6 w-5 h-5 cursor-pointer" onClick={() => setisShow(!isShow)}/> :<AiFillEye className="-ml-6 w-5 h-5 cursor-pointer" onClick={() => setisShow(!isShow)}/>
          }
          
          </div>
         
          {errors.password?.type === 'required' && <small className="text-red-500">This field is required</small> || errors.password?.type === 'pattern' && <small role="alert" className="text-red-500">password must have is less than 6 characters, a capital letter,a special character</small>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Enter Confirm Password</span>
          </label>
          <div className="flex items-center">
          <input 
          {...register("confirm_Password", { required: true })}
            type={isShow ? "text" : "password"}
            placeholder="Type confirm Password"
            className="input input-bordered input-primary w-full "
          />
          
          {
            isShow ? <AiFillEyeInvisible className="-ml-6 w-5 h-5 cursor-pointer" onClick={() => setisShow(!isShow)}/> :<AiFillEye className="-ml-6 w-5 h-5 cursor-pointer" onClick={() => setisShow(!isShow)}/>
          }
          
          </div>
          {errors.confirm_Password && <small className="text-red-500">This field is required</small>}
          
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Foto Url</span>
          </label>
          <input
          {...register("foto", { required: true })}
            type="text"
            placeholder="Type your Foto Url"
            className="input input-bordered input-primary w-full "
          />
          {errors.foto && <small className="text-red-500">This field is required</small>}
          
        </div>
        {
           <button
           type="submit"
          
          className="btn btn-success w-full"
         
           
           > { loading ? <span className="loading loading-spinner text-primary"></span> : "Register"}</button>
        }
      </form>
      <p className="flex mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            if al ready have an account ?   <Link to="/login " className="text-blue-600 mx-1">  Login</Link>  !!</p>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default Register;
