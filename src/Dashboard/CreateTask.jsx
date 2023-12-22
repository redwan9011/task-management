import { useForm } from "react-hook-form"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTask = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()


    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/tasks', data)
            .then(res => {
                console.log(res.data);
                toast("Create your task succefully");
                reset()
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control form">

                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" {...register("title")} name='title' placeholder="title" className="input input-bordered" required />

                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" {...register("description")} name='description' placeholder="description" className="input input-bordered" required />

                <label className="label">
                    <span className="label-text">Deadlines</span>
                </label>
                <input type="date" {...register("deadlines")} name='deadlines' placeholder="Deadlines" className="input input-bordered" required />

                <label className="label">
                    <span className="label-text">Priority</span>
                </label>
                <select {...register("priority")} className=" select select-bordered">
                    <option disabled selected>Select one</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>


                <input type="submit" value={`Create Task`} className="w-full btn btn-outline mt-3" />
                <ToastContainer />
            </form>
        </div>
    );
};

export default CreateTask;