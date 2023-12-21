import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Link to='/Dashboard'>Explore</Link>
           
        </div>
    );
};

export default Home;