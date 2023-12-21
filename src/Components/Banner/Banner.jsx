import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="bg-slate-400 h-72">
            <Link to='/Dashboard/profile' className="btn btn-outline"> {`Let's Explore`}</Link>
        </div>
    );
};

export default Banner;