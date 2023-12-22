import { useEffect } from "react";


const Button = ({ text }) => {
    console.log(text);
	useEffect(() => {
		if (typeof window !== "undefined") {
			const btn = document.querySelector(".button");

			const handleMouseMove = (e) => {
				const x = e.pageX - btn.offsetLeft;
				const y = e.pageY - btn.offsetTop;

				btn.style.setProperty("--x", x + "px");
				btn.style.setProperty("--y", y + "px");
			};

			btn.addEventListener("mousemove", handleMouseMove);

			return () => {
				btn.removeEventListener("mousemove", handleMouseMove);
			};
		}
	}, []);
	return (
		<div>
			<button className="button relative inline-flex px-8 py-3 border-2 border-white text-white font-semibold text-xl tracking-widest overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-1/2 before:top-0 before:w-0 before:h-0 before:rounded-full before:bg-[#f0b428] hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out">
				{text}
			</button>
		</div>
	);
};

export default Button;