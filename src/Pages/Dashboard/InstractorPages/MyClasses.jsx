// import { Link } from "react-router-dom";
import useFetchClasses from "../../../Hooks/useFetchClasses";
import {DotLoader} from "react-spinners"
const MyClasses = () => {
    const {myClassData,myClassLoading} = useFetchClasses()

    if(myClassLoading){
        return <div className="w-full  flex justify-center items-center">
        <DotLoader
    color="#5736d6"
    size={100}
    />
    </div>
    }
    
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold">My Classes</h2>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
        <th>Name</th>
        <th>Status</th>
        <th>Seats</th>
        <th className="text-right">Price</th>
        {/* <th>action</th> */}
        
      </tr>
    </thead>
    <tbody>
     
     {
        myClassData.map((classes,index) =><tr key={classes._id}>
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
                  <div className="text-sm opacity-50">instractor</div>
                </div>
              </div>
            </td>
            <td>
              {classes.status}
              <br/>
              <span className="badge badge-ghost badge-sm">{classes.feedback && classes.feedback}</span>
            </td>
            <td>{classes.seats}</td>
            <td className="text-right">{classes.price}</td>
            {/* <th>
              <Link to={`/dashboard/editClass/${classes._id}`} className="btn btn-ghost btn-xs text-success">edit</Link>
            </th> */}
          </tr>)
     }
    </tbody>
    
  </table>
</div>

        </div>
    );
};

export default MyClasses;