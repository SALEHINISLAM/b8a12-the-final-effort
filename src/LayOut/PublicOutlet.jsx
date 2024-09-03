import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer";
import NavBar from "../SharedComponents/NavBar";

const PublicOutlet = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default PublicOutlet;