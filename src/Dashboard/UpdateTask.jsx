import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateTask = () => {
    const task = useLoaderData()
   

    const {
        register,
        handleSubmit,
    } = useForm()


    const onSubmit = (data) => {
        console.log(data);
        axios.put(`http://localhost:5000/tasks/${task._id}`, data)
            .then(res => {
                console.log(res.data);
                toast("Update your task succefully");
            })
    }

    return (
        <div>
            <h1 className="text-center font-bold my-3 text-3xl">Update your task</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form-control form">

            <label className="label">
                <span className="label-text">Title</span>
            </label>
            <input type="text" {...register("title")} name='title' placeholder="title" className="input input-bordered" defaultValue={task?.title} required />

            <label className="label">
                <span className="label-text">Description</span>
            </label>
            <input type="text" {...register("description")} name='description' placeholder="description" className="input input-bordered" defaultValue={task?.description} required />

            <label className="label">
                <span className="label-text">Deadlines</span>
            </label>
            <input type="date" {...register("deadlines")} name='deadlines' placeholder="Deadlines" className="input input-bordered" defaultValue={task?.deadlines} required />

            <label className="label">
                <span className="label-text">Priority</span>
            </label>
            <select {...register("priority")} defaultValue={task?.priority} className=" select select-bordered">
                <option disabled selected>Select one</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
            </select>


          <button >  <input type="submit" value={`Update Task`}  className="w-full btn btn-outline mt-3" /></button>
          <ToastContainer />
        </form>
    </div>
    );
};

export default UpdateTask;