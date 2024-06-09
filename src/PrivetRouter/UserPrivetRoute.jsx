import { Navigate } from "react-router-dom";

import { DotLoader } from "react-spinners";
import useUser from "../Hooks/useUser";

const UserPrivetRoute = ({children}) => {
    const {user,loading} =useUser()

    if(loading){
        return  <div className="w-full h-[100vh] flex justify-center items-center">
        <DotLoader
    color="#5736d6"
    size={100}
  />
    </div>
    }
    if(user && user.email){
        return children
    }

    return <Navigate to="/" replace={true}/>
    
};

export default UserPrivetRoute;