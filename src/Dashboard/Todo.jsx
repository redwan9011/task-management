import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Todo = () => {
    const {refetch, data: tasks = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/tasks')
            return res.data
        }
    })
    const  handlDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/tasks/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }

  
    return (
      <div className="grid md:grid-cols-1 lg:grid-cols-3 text-center gap-3">

          <div className="border border-black">
            <h1 className="text-xl font-bold underline ">Todo</h1>
           {
            tasks.map( task => <div key={task._id} className="px-2 shadow-xl rounded-md">
                <div  className="bg-slate-200 mb-3 p-2 mt-3 space-y-1">
                    <h2 className="text-lg font-semibold">{task?.title}</h2>
                    <p className="text-slate-700">{task?.description}</p>
                    <p className="text-sm ">Deadline:{task?.deadlines}</p>
                    <p className="text-sm">Priority:{task?.priority}</p>
                    <div className="mt-2">
                        <button className="text-red-500 mr-3 text-2xl" onClick={()=> handlDelete(task._id)}><MdDelete /></button>
                        <Link to={`/dashboard/update/${task._id}`}><button className="text-green-500 text-2xl"><FaRegEdit /> </button></Link>
                    </div>
                </div>

            </div>)
           }
        </div>
        <div className="border border-black min-h-16">
            <h1 className="text-xl font-bold underline ">On going</h1>
        </div>
        <div className="border border-black min-h-16">
            <h1 className="text-xl font-bold underline ">Completed</h1>
        </div>
      </div>
    );
};

export default Todo;