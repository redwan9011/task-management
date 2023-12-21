
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import UsingPeople from "../UsingPeople/UsingPeople";


const Home = () => {

    return (
        <div >
            <Navbar></Navbar>
           <div className="max-w-6xl mx-auto">
             <Banner></Banner>
             <UsingPeople></UsingPeople>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;