import { useEffect, useState } from "react";
import useUser from "../../../Hooks/useUser";
import { formatDistance, formatRelative, subDays } from 'date-fns'
import { AiOutlineCheck } from "react-icons/ai";
import {DotLoader} from "react-spinners"
const PaymentHistory = () => {
    const {user} = useUser()
        const [historyLoading,setHistoryLoading] = useState(true)
        const [paymentHistory,setpaymentHistory] = useState([])
        useEffect(()=>{
                fetch(`https://sportysummercamp.vercel.app/paymentHistory/${user?.email}`)
                .then(res => res.json())
                .then(result =>{
                    console.log(result)
                    setpaymentHistory(result)
                    setHistoryLoading(false)
                })
        },[user])

        if(historyLoading){
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

                <p>
                    
                </p>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Enroll Class</th>
        <th>Transiction Id</th>
        <th>Date</th>
        <th>Payment status</th>
      </tr>
    </thead>
    <tbody className="space-y-6">
      {/* row 1 */}
      
    {
        paymentHistory.map((enroll,index) => <tr className="bg-green-100 border-b-2 border-green-200 shadow-amber-400 " key={enroll._id} >
        <th>{index + 1}</th>
        <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={enroll.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{enroll.myClass}</div>
              <div className="text-sm opacity-50">${enroll.price}</div>
            </div>
          </div>
        </td>
        <td className="">{enroll.paymentId}</td>
        <td className="flex flex-col items-baseline">
                <p>
                    {
                      formatRelative(subDays(new Date(enroll?.paymentDate || 0), 0), new Date())
                    } 
                </p> 
            <small>
            {
            formatDistance(subDays(new Date(enroll?.paymentDate || 0),0), new Date(), { addSuffix: true })
            }
            </small>
                  
        </td>
        <td className="text-green-400"> 
            <div className="bg-green-100">
            <AiOutlineCheck className="inline"/> successfully
            </div>
        </td>
      </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    )
};

export default PaymentHistory;