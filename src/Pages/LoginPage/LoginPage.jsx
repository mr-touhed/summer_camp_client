import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialButton from "../../sharedPage/SocialButton";
import UserAnimate from "../../sharedPage/UserAnimate";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import { useState } from "react";
import useUser from "../../Hooks/useUser";
import { Toaster, toast } from "react-hot-toast";
const LoginPage = () => {
    const {signInUser}=useUser()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loaction = useLocation()
    const navigate = useNavigate()
    const from = loaction?.state?.from?.pathName || "/"
    const onSubmit = data => {
      signInUser(data.email,data.password)
      .then(() =>{
        navigate(from, {replace:true})
      })
      .catch(error =>{
        
        toast.error(`${error}`)
      })
    };
    const [isShow,setisShow] = useState(false)
    
   
  return (
    <div className="md:flex  justify-around items-center p-12">
        <UserAnimate className="md:w-1/2 mr-6"/>
      <div className="md:w-3/4 md:p-12">
      <form action="" className=" space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">your Email Address</span>
          </label>
          <input
          {...register("email", { required: true })}
            type="text"
            placeholder="Type email"
            className="input input-bordered input-primary w-full "
          />
          {errors.email && <small className="text-red-500">This field is required</small>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">your Password</span>
          </label>
          <div className="flex items-center">
          <input 
          {...register("password", { required: true })}
            type={isShow ? "text" : "password"}
            placeholder="Type password"
            className="input input-bordered input-primary w-full "
          />
          
          {
            isShow ? <AiFillEyeInvisible className="-ml-6 w-5 h-5 cursor-pointer" onClick={() => setisShow(!isShow)}/> :<AiFillEye className="-ml-6 w-5 h-5 cursor-pointer" onClick={() => setisShow(!isShow)}/>
          }
          
          </div>
          {errors.email && <small className="text-red-500">This field is required</small>}
        </div>
        <div className="text-center w-full">
        <input
            type="submit"
            placeholder="Type here"
            className="btn btn-success w-full"
            value="Login"
          />
        </div>
      </form>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <div className="divider"></div>
            <div className="text-center mb-4">
                <SocialButton/>
            </div>
        <p className="md:flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            if you are in new please  <Link to="/register " className="text-blue-600 md:mx-1">Register</Link> First !!</p>
      </div>
    </div>
  );
};

export default LoginPage;
