import { Link } from "react-router-dom";
import banner from '../../assets/task-mannt-c.jpg'

const Banner = () => {
    return (
        <div className="bg-slate-400 ">
          

            <div className="hero h-[60vh]" style={{ backgroundImage: `url(${banner})` }}>
                
                <div className="flex justify-end w-full h-full items-end mr-96 mb-10">
                    <div className="">
                        <Link to='/Dashboard/profile' className="btn btn-outline"> {`Let's Explore`}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;