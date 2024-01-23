import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";



const MainLayout = () => {

    useEffect(() => {
        const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
    }, [])

    return (
        <div className="overflow-hidden">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;