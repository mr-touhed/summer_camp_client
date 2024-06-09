import { useState } from "react";
import useFetchAllClasses from "../../../Hooks/useFetchAllClasses";
import { Toaster, toast } from "react-hot-toast";

const ShowAllClasses = () => {
    const {allClassesData, allClassDataLoading,refetch} = useFetchAllClasses()
    const [feedbackId,setFeedBackId] = useState(null)
    

    const manageClasses = (id,option) =>{
        fetch(`https://sportysummercamp.vercel.app/manageClass?id=${id}&option=${option}`,{
          method: "PATCH",

        })
        .then(res => res.json())
        .then(result =>{
          console.log(result)
          refetch()
        })
    }

 

    // for feedBack 

    

    const sendFeedBack = (e) =>{
      
        console.log(feedbackId)
      const massage = e.target.massage.value;
      e.preventDefault()
          fetch(`https://sportysummercamp.vercel.app/classFeedback/${feedbackId}`,{
            method:"PATCH",
            headers:{
              "content-type":"application/json"
            },
            body: JSON.stringify({massage})
          })
          .then(res => res.json())
          .then(result =>{
            console.log(result)
            if(result.modifiedCount > 0){
              toast.success('Send your Feedback.', {
                position: "bottom-center"
              })
            }
          })
      

    }

    if(allClassDataLoading){
        return 
    }
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">All Classes</h2>

            <Toaster
  position="center-center"
  reverseOrder={false}
/>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
        <th>Instractor</th>
        <th>Class</th>
        <th>status</th>
        <th>Seats</th>
        <th className="text-right">Price</th>
        <th >Enroll</th>
        <th>action</th>
        
      </tr>
    </thead>
    <tbody>
     
     {
        allClassesData.map((classes,index) =><tr key={classes._id}>
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
                <div>
                  <div className="font-bold">{classes.name}</div>
                  <div className="text-sm opacity-50">{classes.email}</div>
                </div>
              </div>
            </td>
            <td>
              {classes.classes}
              
            </td>
            <td>
              {classes.status}
              
            </td>
            <td>{classes.seats}</td>
            <td className="text-right">{classes.price}</td>
            <td className="">{classes.enrolled}</td>
            <th>
            <button className="btn btn-xs bg-success" onClick={()=>manageClasses(classes._id,"approved")} disabled={classes.status === "approved"}>approved</button>
            <button className="btn btn-xs ml-3 bg-error" onClick={()=>manageClasses(classes._id,"deny")} disabled={classes.status === "deny"}>Deny</button>
            <a className="btn btn-xs ml-3" href="#my_modal_8" onClick={() => setFeedBackId(classes._id)}>FeedBack</a>
            

              {/* feedback modal box  */}
            <div className="modal" id="my_modal_8">
                <div className="modal-box">
                 
                 <form onSubmit={sendFeedBack}>
                 <textarea name="massage" placeholder="feedback" defaultValue={classes?.feedback} className="textarea textarea-bordered textarea-md w-full" ></textarea>
                    <button className="btn btn-xs btn-warning">send</button>
                 </form>



                  <div className="modal-action">
                  <a href="#" className="">close</a>
                  </div>
                </div>
              </div>
            </th>
          </tr>)
     }
    </tbody>
    
  </table>

  {/* Put this part before </body> tag */}
             
        </div>
    );
};

export default ShowAllClasses;



