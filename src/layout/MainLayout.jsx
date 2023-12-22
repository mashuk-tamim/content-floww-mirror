import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="bg-black">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;