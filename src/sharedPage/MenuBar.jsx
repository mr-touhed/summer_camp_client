
import { Link } from 'react-router-dom';
import { BiUserCircle } from "react-icons/bi";
import useUser from '../Hooks/useUser';
import { useEffect, useState } from 'react';
import { MdDarkMode,MdLightMode } from "react-icons/md";
const MenuBar = () => {
  const {user,logOut} = useUser()
  const [darkMode,setDarkMode] = useState(true)

  useEffect(()=>{
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('data-theme', darkMode ? "light" : "dark")
  },[darkMode])


    const menuItems = <>
    <li><Link>Home</Link></li>
    <li><Link to="/instractor">Instructors</Link></li>
    <li><Link to="/classes">Classes</Link></li>
    {
      user &&  <li><Link to="dashboard">Dashboard</Link></li>
    }
    
    </>

    return (
        <div className="navbar bg-blue-400 sticky top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link className=" hidden md:block normal-case text-xl" to="/">Sporty Summer Camp</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    
     

  

    {
        user ? (user?.photoURL ?  <>
        <div  className="btn  btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user?.photoURL} /> 
      </div> </div><a className='btn ml-6' onClick={logOut}> Logout</a></> : <><BiUserCircle className="w-8 h-8"/> <a className='btn ml-6' onClick={logOut}> Logout</a> </>)  : <Link className=" px-4 rounded-lg text-white py-2 bg-blue-950" to="/login">Login</Link>
    }
     <div className='ml-6'>
     {
        darkMode ? <MdLightMode className='w-6 h-6 text-lime-50 cursor-pointer' onClick={() =>setDarkMode(!darkMode)}/>: <MdDarkMode className='w-6 h-6 text-lime-50 cursor-pointer' onClick={() =>setDarkMode(!darkMode)}/>
      }
     </div>
  </div>
</div>
    );
};

export default MenuBar;