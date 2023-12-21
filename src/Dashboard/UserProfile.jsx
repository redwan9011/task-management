import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const UserProfile = () => {
    const { user ,  logOut} = useContext(AuthContext)
    console.log(user);
    return (
        <div className="flex justify-center flex-col items-center ">
            <img className="rounded-full w-32 " src={user?.photoURL} alt="user image" />
            <h1 className="font-bold text-2xl my-1">{user?.displayName}</h1>
            <h4 className="font-semibold mb-1">email:{user?.email}</h4>
            <Link onClick={logOut} className="btn text-[10px] md:text-base bg-red-600 hover:bg-red-800 text-white md:px-6" to="/">LogOut</Link> 
        </div>
    );
};

export default UserProfile;