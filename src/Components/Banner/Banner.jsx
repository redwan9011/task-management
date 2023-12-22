import { Link } from "react-router-dom";
import banner from '../../assets/task-mannt-c.jpg'

const Banner = () => {
    return (
        <div className="bg-slate-400 ">
          

            <div className="hero h-[30vh] md:h-[45vh]  lg:h-[60vh]" style={{ backgroundImage: `url(${banner})` }}>
                
                <div className="flex justify-end w-full h-full items-end mr-20 md:mr-48 md:mt-6 lg:mr-96 lg:mb-10">
                    <div className="">
                        <Link to='/Dashboard/profile' className="btn btn-outline btn-xs  md:btn-md lg:btn-lg"> {`Let's Explore`}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;