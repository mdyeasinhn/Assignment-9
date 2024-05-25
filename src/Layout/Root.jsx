import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;