import useFetchMyAddClass from "../../../Hooks/useFetchMyAddClass";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Toaster, toast } from "react-hot-toast";
import { Link} from "react-router-dom";
import {DotLoader} from "react-spinners"
const MySelectedClasses = () => {
 

    const {myAddClass,loadingMyAddClass,refetch}=useFetchMyAddClass()
    if(loadingMyAddClass){
        return <div className="w-full  flex justify-center items-center">
        <DotLoader
    color="#5736d6"
    size={100}
    />
    </div>
    }
    
   
    const deletedClass = (id) =>{
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    
                    fetch(`https://sportysummercamp.vercel.app/addClass/${id}`,{
                        method:"DELETE"
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if(result.deletedCount > 0){
                          
                          toast.success('Successfully toasted!')
                          refetch()
                        }
                    })
                }
              },
              {
                label: 'No',
                
              }
            ]
          })
    }

    return (
        <div className="overflow-x-auto">
            <h2 className="text-center text-3xl font-semibold">MY Added Classes</h2>


            <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
        <th>Class  Images</th>
        <th>Class</th>
               
        <th className="text-right">Price</th>
        
        <th>action</th>
        
      </tr>
    </thead>
    <tbody>
     
     {
        myAddClass.map((classes,index) =><tr key={classes._id}>
            <th>
              {index + 1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classes.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              {classes.myClass}
              
            </td>
            
            
            <td className="text-right">{classes.price}</td>
            
            <th className="flex flex-col md:flex-row">
            <Link className="btn btn-xs bg-success" to={"/dashboard/payment"} state={{ data: classes }}>pay</Link>
            <button className="btn btn-xs ml-3 bg-error" onClick={() => deletedClass(classes._id)}>Delete</button>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
            
            </th>
          </tr>)
     }
    </tbody>
    
  </table>
        </div>
    );
};

export default MySelectedClasses;