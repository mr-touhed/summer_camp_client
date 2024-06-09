import Swal from "sweetalert2";
import useFetchUser from "../../../../Hooks/useFetchUser";
// import { BsTrash } from "react-icons/bs";
import {DotLoader} from "react-spinners"
const AllUsers = () => {
    const {AllUserData,userLoading,refetch} = useFetchUser()

    const createInstructor = (user) =>{
        const {name,email} = user
        Swal.fire({
            title: 'Are you sure?',
            text: `are you sure you went to see instractor ${name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make instractor!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sportysummercamp.vercel.app/users/instractor/${email}`,{
                    method: "PATCH",
        
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount > 0){
                      refetch()
                        Swal.fire(
                            'Confirm!',
                            'Your user has been instractor.',
                            'success'
                          )
                    }
                })
            }
          })



        
    }

    const makeAdmin = (user) =>{
      const {name,email} = user
      Swal.fire({
          title: 'Are you sure?',
          text: `are you sure you went to see admin ${name}`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Make admin!'
        }).then((result) => {
          if (result.isConfirmed) {
              fetch(`https://sportysummercamp.vercel.app/users/admin/${email}`,{
                  method: "PATCH",
      
              })
              .then(res => res.json())
              .then(data => {
                  if(data.modifiedCount > 0){
                    refetch()
                      Swal.fire(
                          'admin!',
                          `${user.name} is admin`,
                          'success'
                        )
                  }
              })
          }
        })



      
  }

    if(userLoading){
        return <div className="w-full  flex justify-center items-center">
        <DotLoader
    color="#5736d6"
    size={100}
  />
    </div>
    }
    return (
        <div className="w-[1000px]">
            <h2 className="text-4xl font-semibold text-center">All Users</h2>

            <div className="overflow-x-auto ">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        {/* <th>Delete</th> */}
      </tr>
    </thead>
    <tbody>
      {
      AllUserData.map((user,index) =>  <tr key={user._id}>
        <th>{index +1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
        <button onClick={()=>createInstructor(user)} className="btn btn-xs btn-warning" disabled={user.role === "instractor"}>instructor</button>
        <button className="btn btn-xs ml-3 btn-success" disabled={user.role === "admin"} onClick={()=>makeAdmin(user)}>admin</button>
        </td>
        {/* <td><button className="btn btn-xs ml-3 btn-error">
            
            <BsTrash className="text-red-800"/>
            </button></td> */}
      </tr>)
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;