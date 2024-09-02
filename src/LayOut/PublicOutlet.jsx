import { Outlet } from "react-router-dom";

const PublicOutlet = () => {
    return (
        <div>
            <p>
                Header
            </p>
            <Outlet/>
            <p>
                Footer
            </p>
        </div>
    );
};

export default PublicOutlet;