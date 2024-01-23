import { motion, useMotionValue, useSpring } from "framer-motion";
// import arrow from "../../../assets/svg/hero-arrow.svg"
import julian from "../../../assets/images/julian_dorey.jpg";
import parmita from "../../../assets/images/cheerful-muslim-woman-compressed.jpg";
import arrow from "../../../assets/svg/64fb1bf7246f0314b3bb34b4_arrow projects.svg"
import linkArrow from "../../../assets/svg/link-arrow.svg"
import "./ClientResult.css";

const ClientResults = () => {

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = {
        damping: 40,
        stiffness: 200,
        mass: 5.5
    }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

	const handleMouseMove1 = (e) => {
		const { clientX, clientY } = e;
		console.log(clientX);
		// if (clientX < 500) {
		//     mouse.x.set(clientX + 200);

		// }
		// else {
		// }
		mouse.x.set(clientX - clientX / 3);
		mouse.y.set(clientY - clientY / 3);
	};
	const handleMouseMove2 = (e) => {
		const { clientX, clientY } = e;
		mouse.x.set(clientX - clientX / 2);
		mouse.y.set(clientY - clientY / 2 - 400);
	};

	return (
		<section className="bg-clientBg w-11/12 mx-auto font-poppins relative px-8 lg:px-12 pt-28 pb-14 rounded-[30px] lg:rounded-[70px] space-y-0">
			<h2 className="text-black font-semibold text-4xl lg:text-6xl">
				Deep dive on
			</h2>
			<h1 className="text-yellow font-bold text-6xl lg:text-8xl pt-5 pb-10">
				Client Results
            </h1>
            {/* arrow */}
			<img
				src={arrow}
				alt=""
				className="absolute top-14 md:top-12 lg:top-10 left-64 md:left-[270px] lg:left-1/3 w-32 md:w-36 lg:w-44"
			/>
			<div className="bg-white p-10 lg:p-16 rounded-3xl md:rounded-[30px] lg:rounded-[40px]">
				{/* Parmita Katkar */}
				<motion.div
					className="flex justify-between items-center border-b border-black wrap"
					onMouseMove={handleMouseMove1}
				>
					<p className="text-2xl md:text-3xl lg:text-4xl text-black md:font-medium lg:font-semibold w-full py-6 lg:py-10">
						Parmita Katkar
                    </p>
                    {/* link arrow */}
					<a href="">
						<img
							src={linkArrow}
							alt=""
							className="w-8"
						/>
					</a>
					<motion.div
						className="bg-white p-2 pb-0 border rounded-xl border-black cap absolute left-1/2 h-[340px] z-10"
						style={{ left: smoothMouse.x, top: smoothMouse.y }}
					>
						<div>
							<img
								src={parmita}
								alt=""
								className="w-56 rounded-lg"
							/>
						</div>
						<div className="flex flex-col items-center justify-center h-10">
							<h2 className="text-black font-medium text-center">
								Parmita Katkar
							</h2>
						</div>
					</motion.div>
				</motion.div>
				{/* Julian Dorey */}
				<motion.div
					className="flex justify-between items-center border-b border-black relative wrap"
					onMouseMove={handleMouseMove2}
				>
					<p className="text-2xl md:text-3xl lg:text-4xl text-black md:font-medium lg:font-semibold w-full py-6 lg:py-10">
						Julian Dorey
					</p>
{/* link arrow */}
					<a href="">
						<img
							src={linkArrow}
							alt=""
							className="w-8"
						/>
					</a>
					<motion.div
						className="bg-white p-2 pb-0 border rounded-xl border-black cap absolute left-1/2 h-[330px] z-10"
						style={{ left: smoothMouse.x, top: smoothMouse.y }}
					>
						<div>
							<img
								src={julian}
								alt=""
								className="w-56 rounded-lg"
							/>
						</div>
						<div className="flex flex-col items-center justify-center h-10">
							<h2 className="text-black font-medium text-center">
								Julian Dorey
							</h2>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ClientResults;
