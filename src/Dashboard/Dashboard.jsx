import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-12 gap-7 md:px-5 lg:px-0 mb-5 ">
           <div className="col-span-2 flex flex-col bg-slate-500 md:max-h-full md:min-h-screen pt-3 md:pt-10 items-center text-white">
             <Link to='/dashboard/profile' className="w-fit lg:text-xl"> Profile</Link>
             <Link to='/dashboard/createTask' className="w-fit lg:text-xl"> Create Task</Link>
             <Link to='/dashboard/todo' className="w-fit lg:text-xl"> To-Do</Link>
             <div className="divider divider-neutral"></div>
             <Link to='/' className="w-fit pb-2 lg:text-xl"> Home</Link>
           </div>
           <div className="col-span-10 mt-10 px-5 md:px-0">
           <Outlet></Outlet>
           </div>
           
        </div>
    );
};

export default Dashboard;