import { useForm } from "react-hook-form";
import useUser from "../../../Hooks/useUser";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import {DotLoader} from "react-spinners"
const AddClasses = () => {
  const {user,loading} = useUser()
  const [loadingClass,setLoadingClass] = useState(false)
  const apiKey = import.meta.env.VITE_UPLOAD_IMG_API


  
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = async(data) => {
    setLoadingClass(true)
    const formData = new FormData();
      formData.append('image', data.image[0]);
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      if(result.success){
        const image = result.data.display_url

        const newClass = {name:user.displayName,email:user.email,price:parseFloat(data.price),seats:data.seats,image,status:"pending", enrolled:0,classes:data.classes}

        fetch('https://sportysummercamp.vercel.app/classes',{
          method: "POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(newClass)
        })
        .then(res => res.json())
        .then(result =>{
           
            if(result.insertedId){
              toast.success("Add Class successfully")
              setLoadingClass(false)
              reset()
            }

            
        })
        
        
      }
  }

  if(loading){
    return <div className="w-full  flex justify-center items-center">
    <DotLoader
color="#5736d6"
size={100}
/>
</div>
  }

  return (
    <div className="w-3/4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-2 p-10 ">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input
            defaultValue={user?.displayName}
            readOnly
            {...register("name")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label"></label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
           defaultValue={user?.email}
           readOnly
            {...register("email")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label"></label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input
          {...register("seats",{ required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label"></label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
          {...register("price",{ required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label"></label>
        </div>
        <div>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image",{ required: true })}/>
        </div>
        <div>
        <select {...register("classes", { required: true })} className="input" defaultValue="choose">
        <option value="choose" disabled>Choose Class</option>
        <option value="cricket">Cricket</option>
        <option value="football">Football</option>
        <option value="hockey">Hockey</option>
        <option value="badminton">Badminton</option>
        <option value="basketball">Basketball</option>
        <option value="tennis">Tennis</option>
      </select>
        </div>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-success " disabled={loadingClass}>
                  
                  {
                    loadingClass ? <span className="loading loading-infinity loading-lg"></span> : "add class"
                  }
            </button>
        </div>
      </form>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default AddClasses;
