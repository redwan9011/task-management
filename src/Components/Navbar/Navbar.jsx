import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
  const links = <>
    <li> <Link to='/'>Home</Link> </li>
  </>
  const {user, logOut} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
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