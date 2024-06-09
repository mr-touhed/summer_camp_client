import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";
import {  useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import useUserRole from "../../../Hooks/useUserRole";
const AllClassesCard = ({classesData}) => {
    const {user} = useUser()
    const {role,roleLoading}=useUserRole()
    
  const{classes,image,name,price,seats,enrolled} = classesData

    
  const navigate = useNavigate()
 
  // TODO: Add classes 
  if(roleLoading){
    return 
  }

  

  const addClasses = (classesData) =>{
    const {classes,image,price,_id} = classesData;
      if(!user){
        Swal.fire({
          title: 'Please Login First',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Login!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", { replace:true})


          }
        })
      }
      
      const addClass = {myClass:classes,image,price,classId:_id,email:user.email,seats,name:user?.displayName}
      
      fetch('https://sportysummercamp.vercel.app/addedClass',{
        method: "POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(addClass)
      })
      .then(res => res.json())
      .then(result =>{
          if(result.insertedId){
            toast.success('Successfully Add Your Class!')
          }
      })
  }


  return (
    
    <div className={`card md:w-96 bg-base-100 shadow-xl ${seats < 1 ? "border-red-500 border-2 opacity-50": ""}`}>
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {classes}</h2>
        <p>Instructor : {name}</p>
        <div className="flex">
            <p>Available seats: {seats}</p>
            
            <p>Price: ${price}</p>
        </div>
        <p>Enroll Students: {enrolled}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-600 text-white" onClick={()=>addClasses(classesData)} disabled={seats < 1 || role == "admin" || role == "instractor"}>Select Class</button>
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;
