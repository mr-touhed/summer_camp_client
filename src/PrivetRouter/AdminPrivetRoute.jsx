import { Navigate } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";
import { DotLoader } from "react-spinners";

const AdminPrivetRoute = ({children}) => {
 const {role,roleLoading} = useUserRole()
    
    if(roleLoading){
       return  <div className="w-full h-[100vh] flex justify-center items-center">
        <DotLoader
    color="#5736d6"
    size={100}
  />
    </div>
    }
    if(role === "admin"){
        return children
        
    }

    return <Navigate to="/" replace={true}/>
    
    
};

export default AdminPrivetRoute;