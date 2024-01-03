import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import '../css/locomotive-scroll.css'
import { useEffect, useRef } from "react";


const MainLayout = () => {
    const scrollRef = useRef(null);

    
    useEffect(() => {
        const scroll = new LocomotiveScroll({
			el: scrollRef.current,
            smooth: true,
            multiplier: 0.3,
        });
        return () => {
            scroll.destroy();
        }
    },[])
    return (
        <div ref={scrollRef} className="scroll-container">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;