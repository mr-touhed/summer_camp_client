import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import { Fade } from "react-awesome-reveal";
import { DotLoader } from "react-spinners";



const Dashboard = () => {
        
       
        const {role,roleLoading} = useUserRole()
    // TODO: SHOW Menu conditionaly student instractor admin
    

    if(roleLoading){
        return <div className="w-full h-[100vh] flex justify-center items-center">
        <DotLoader
    color="#5736d6"
    size={100}
  />
    </div>
    }
    
    
    console.log(role)
    const StudentMenu = <>
               {
              role === "student" &&   <Fade cascade>
                <li className="bg-white w-full p-4 rounded-lg shadow-md"><NavLink className={({isActive}) => isActive ? 'text-blue-600' : "" } to="/dashboard/selectClasses">My Selected Classes</NavLink></li>
                 <li className="bg-white w-full p-4 rounded-lg shadow-md"><NavLink className={({isActive}) => isActive ? 'text-blue-600' : ""} to="/dashboard/enrolledClasses">My Enrolled Classes</NavLink></li>
                 <li className="bg-white w-full p-4 rounded-lg shadow-md"><NavLink className={({isActive}) => isActive ? 'text-blue-600' : ""} to="/dashboard/paymentHistory">My Payments History </NavLink></li>
                </Fade>
               }
    </>
    const InstructorMenu = <>
               {
                role === "instractor" &&  <Fade cascade>
                 <li className="bg-white w-full p-4 rounded-lg shadow-md"><NavLink className={({isActive}) => isActive ? 'text-blue-600' : ""} to="/dashboard/addClass">Add a Class</NavLink></li>
                 <li className="bg-white w-full p-4 rounded-lg shadow-md"><NavLink className={({isActive}) => isActive ? 'text-blue-600' : ""} to="/dashboard/myClasses">My Classes</NavLink></li>
                 </Fade>
               }
    </>
    const adminMenu = <>
                    {
                     role === "admin" &&   <Fade cascade>
                        <li className="bg-white w-full p-4 rounded-lg shadow-md"><NavLink className={({isActive}) => isActive ? 'text-blue-600' : ""} to="/dashboard/allClasses">Manage Classes</NavLink></li>
                        <li className="bg-white w-full p-4 rounded-lg shadow-md"><NavLink className={({isActive}) => isActive ? 'text-blue-600' : ""} to="/dashboard/manageUser">Manage Users</NavLink></li>
                        </Fade>
                    }
    </>
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-[400px] md:h-[100vh] flex items-center border-r-2 bg-blue-500">
            
            <ul className="w-full   space-y-5 p-8">
                {StudentMenu}
                {InstructorMenu}
                {adminMenu}
            </ul>
            
            </div>
            <div className="w-full">
                    <Outlet/>
            </div>
            
        </div>
    );
};

export default Dashboard;