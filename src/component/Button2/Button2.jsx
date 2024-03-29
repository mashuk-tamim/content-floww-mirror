// import { useEffect } from "react";
// import PropTypes from "prop-types"; 

// const Button = ({ text }) => {
//     // console.log(text);
// 	useEffect(() => {
// 		if (typeof window !== "undefined") {
// 			const btn = document.querySelector(".button");

// 			const handleMouseMove = (e) => {
// 				const x = e.pageX - btn.offsetLeft;
// 				const y = e.pageY - btn.offsetTop;

// 				btn.style.setProperty("--x", x + "px");
// 				btn.style.setProperty("--y", y + "px");
// 			};

// 			btn.addEventListener("mousemove", handleMouseMove);

// 			return () => {
// 				// Cleanup the event listener when the component unmounts
// 				btn.removeEventListener("mousemove", handleMouseMove);
// 			};
// 		}
// 	}, []);
// 	return (
// 		<div className="">
// 			<button
// 				className="button relative inline-flex justify-center items-center w-48 py-3.5 border-2 rounded-md border-white text-white font-semibold text-xl overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-1/2 before:top-0 before:w-0 before:h-0 before:rounded-full before:bg-yellow hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out"
// 			>
// 				{text}
// 			</button>
// 		</div>
// 	);
// };

// Button.propTypes = {
//     text: PropTypes.string.isRequired,
// }

// export default Button;