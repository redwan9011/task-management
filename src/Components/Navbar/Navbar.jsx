import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const links = <>
   <li> <NavLink to='/'>Home</NavLink> </li>
   <li> <NavLink to='/audience'>Audience</NavLink> </li>
   <li> <NavLink to='/about'>About Us</NavLink> </li>
   
  </>
  const {user, logOut} = useContext(AuthContext)
    return (
        <div className=" bg-base-100 ">
            <div className="navbar max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          links
        }
      </ul>
    </div>
    <img className="w-28 hidden md:block" src="https://i.ibb.co/C7NQyvx/png-clipart-task-management-project-management-performance-management-business-text-service-removebg.png" alt="logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-3">
    {
          links
        }
    </ul>
  </div>
  <div className="navbar-end">
  {
      user ? <div className="flex items-center gap-2">
      
        <Link onClick={logOut} className="btn text-[10px] md:text-base bg-red-600 hover:bg-red-800 text-white md:px-6" to="/">LogOut</Link> 
      </div>: 
      <Link className=" bg-red-600 hover:bg-red-800 text-xs md:text-base px-3 py-2 md:px-4 md:py-3 rounded-md text-white" to = "/login">Login / Register </Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;