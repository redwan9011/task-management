
import Banner from "../Banner/Banner";
import UsingPeople from "../UsingPeople/UsingPeople";


const Home = () => {

    return (
        <div >
           
           <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-0">
             <Banner></Banner>
             <UsingPeople></UsingPeople>
           </div>
           
        </div>
    );
};

export default Home;