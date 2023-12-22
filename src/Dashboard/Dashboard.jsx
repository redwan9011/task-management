import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10 ">
           <div className="col-span-3 flex flex-col bg-slate-500 max-h-full min-h-screen pt-10 items-center text-white">
             <Link to='/dashboard/profile' className="w-fit"> Profile</Link>
             <Link to='/dashboard/createTask' className="w-fit"> Create Task</Link>
             <Link to='/dashboard/todo' className="w-fit"> To-Do</Link>
             <div className="divider divider-neutral"></div>
             <Link to='/' className="w-fit"> Home</Link>
           </div>
           <div className="col-span-9 mt-10">
           <Outlet></Outlet>
           </div>
           
        </div>
    );
};

export default Dashboard;