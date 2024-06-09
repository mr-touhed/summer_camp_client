import { useEffect, useState } from "react";
import useUser from "../../../Hooks/useUser";
import {DotLoader} from "react-spinners"

const EnrollClasses = () => {
        const {user} = useUser()
        const [fetchLoading,setFetchLoading] = useState(true)
        const [enrollClasses,setEnrollClasses] = useState([])
        useEffect(()=>{
                fetch(`https://sportysummercamp.vercel.app/enrollClasses/${user?.email}`)
                .then(res => res.json())
                .then(result =>{
                    console.log(result)
                    setEnrollClasses(result)
                    setFetchLoading(false)
                })
        },[user])

        if(fetchLoading){
            return <div className="w-full  flex justify-center items-center">
            <DotLoader
        color="#5736d6"
        size={100}
        />
        </div>
        }
    return (
        <div>
            <h2>My Enroll Classes</h2>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Enroll Class</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
    {
        enrollClasses.map((enroll,index) => <tr className="bg-base-200" key={enroll._id}>
        <th>{index + 1}</th>
        <td>
                <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={enroll.image} alt="Avatar Tailwind CSS Component" />
              </div>
              </div>
        </td>
        <td className="font-semibold">{enroll.myClass}</td>
        <td>${enroll.price}</td>
        <td className="text-green-400">Success</td>
      </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default EnrollClasses;