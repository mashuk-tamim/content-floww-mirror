import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";

const Button = ({ text, btnBg, isBorder, width }) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
		console.log("hovered", isHovered);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
		console.log("not hovered", isHovered);
	};
	return (
		<div>
			<button
				className={`relative inline-flex justify-center items-center w-48 h-14 ${btnBg} border-2 rounded-md border-white hover:border-none font-semibold text-xl overflow-hidden ${
					btnBg === "bg-[#000000]"
						? isHovered
							? "text-black"
							: "text-white"
						: isHovered
						? "text-black"
						: "text-black"
				} `}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="w-full absolute z-10">{text}</div>
				<motion.div
					className="absolute -top-20 z-0"
					animate={{
						scale: isHovered ? 3 : 0,
						transition: {
							duration: 0.3,
						},
					}}
					initial={{
						scale: 0,
					}}
				>
					<svg
						width="100"
						height="100"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="50" cy="50" r="50" fill="#f0b428" />
					</svg>
				</motion.div>
			</button>
		</div>
	);
};

export default Button;

Button.propTypes = {
	text: PropTypes.string,
	btnBg: PropTypes.string,
};
