import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" p-5 bg-gray-300 text-black">
            <footer className="flex items-center flex-col">
  <aside>
  <img className="w-32 " src="https://i.ibb.co/C7NQyvx/png-clipart-task-management-project-management-performance-management-business-text-service-removebg.png" alt="logo" />
   
   
  </aside> 
  <p>Copyright © 2023 - All right reserved</p>
    <div className="grid grid-flow-col gap-4 text-2xl mt-2">
     <a href="https://www.facebook.com/rayhan.islam.8" target="_"><FaFacebook /></a>
     <a href="https://www.linkedin.com/" target="_"><FaLinkedin /></a>
     <a href="https://github.com/redwan9011" target="_"><FaGithub /></a>
    </div>

</footer>
        </div>
    );
};

export default Footer;