import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";



const MainLayOut = () => {
   
    return (
        <div>
            
            <Navbar></Navbar>
           <div className="">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;