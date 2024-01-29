import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const FramerMagnetic = ({ children }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const ref = useRef(null);
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({x: middleX * 0.2 , y: middleY * 0.2})
    };
    const handleMouseLeave = () => {
        setPosition({x: 0, y: 0})
    };

    const {x , y} = position;

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                x, y
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                mass: 0.5,
                damping: 15
            }}
		>
			{children}
		</motion.div>
	);
};

export default FramerMagnetic;

FramerMagnetic.propTypes = {
	children: PropTypes.node.isRequired,
};
