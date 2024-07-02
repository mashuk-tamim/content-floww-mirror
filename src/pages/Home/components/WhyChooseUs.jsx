import starNoFill from "../../../assets/svg/64fb2c7ec087160e4c6764f3_Yellow Star no fill.svg"
import starFill from "../../../assets/svg/64fc1a63ad4bc0f51d3653b9_star filled.svg"
import videoCamera from "../../../assets/gif/video_camera.gif"
import rocket from "../../../assets/gif/rocket.gif"
import hourGlass from "../../../assets/gif/hourglass.gif"
import teamWork from "../../../assets/gif/teamwork.gif"
import magicWand from "../../../assets/gif/magic_wand.gif"
import certificate from "../../../assets/gif/certificate.gif"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const WhyChooseUs = () => {
    const svgRef = useRef(null);
    const isInView = useInView(svgRef, { once: true });
    
	return (
		<section
			ref={svgRef}
			className="font-poppins bg-black py-20 overflow-hidden"
		>
			<div className="flex flex-col items-center relative md:left-20">
				<div className="flex gap-3 md:gap-5 absolute">
					{/* star no-fill */}
					<motion.img
						style={{
							scale: isInView ? 1 : 0,
							transitionDuration: "0.7s",
							transitionDelay: "0.3s",
						}}
						src={starNoFill}
						alt=""
						className="absolute -left-5 md:-left-20 lg:-left-20 -top-10 md:top-1 lg:top-10 md:-bottom-5 w-6 md:w-10"
					/>
					<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold">
						Perks
					</h1>
					<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white">
						So Good
					</h2>
					{/* star fill */}
					<motion.img
						style={{
							scale: isInView ? 1 : 0,
							transitionDuration: "0.7s",
							transitionDelay: "0.3s",
						}}
						src={starFill}
						alt=""
						className="w-6 md:w-12 -top-4 md:-top-2 absolute -right-20 md:-right-16 lg:-right-24"
					/>
				</div>
				<div className="flex gap-3 md:gap-5 absolute top-12 md:top-20 lg:top-28 md:left-0 lg:left-60">
					<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white">
						you will never go back
					</h2>
					{/* star no-fill bottom */}
					<motion.img
						style={{
							scale: isInView ? 1 : 0,
							transitionDuration: "0.7s",
							transitionDelay: "0.3s",
						}}
						src={starNoFill}
						alt=""
						className="w-6 md:w-8 lg:w-10 absolute right-[90px] md:right-5 lg:right-52 top-5 md:top-14 lg:top-28"
					/>
				</div>
			</div>
			<div className="w-4/5 grid gap-5 grid-cols-2 md:grid-cols-3 items-center justify-center mx-auto pt-32 md:pt-40 lg:pt-80 space-y-5">
				{/* ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? */}
				<div className="flex flex-col items-center space-y-5 mt-5">
					<img src={videoCamera} alt="" className="w-16 lg:w-28" />
					<p className="text-white text-center md:w-4/5 lg:w-3/5 font-medium">
						Transform your existing videos or podcasts into viral
						shorts
					</p>
				</div>
				<div className="flex flex-col items-center space-y-5">
					<img src={rocket} alt="" className="w-16 lg:w-28" />
					<p className="text-white text-center md:w-4/5 lg:w-3/5 font-medium">
						Transform your existing videos or podcasts into viral
						shorts
					</p>
				</div>
				<div className="flex flex-col items-center space-y-5">
					<img src={hourGlass} alt="" className="w-16 lg:w-28" />
					<p className="text-white text-center md:w-4/5 lg:w-3/5 font-medium">
						Transform your existing videos or podcasts into viral
						shorts
					</p>
				</div>
				<div className="flex flex-col items-center space-y-5">
					<img src={teamWork} alt="" className="w-16 lg:w-28" />
					<p className="text-white text-center md:w-4/5 lg:w-3/5 font-medium">
						Transform your existing videos or podcasts into viral
						shorts
					</p>
				</div>
				<div className="flex flex-col items-center space-y-5">
					<img src={magicWand} alt="" className="w-16 lg:w-28" />
					<p className="text-white text-center md:w-4/5 lg:w-3/5 font-medium">
						Transform your existing videos or podcasts into viral
						shorts
					</p>
				</div>
				<div className="flex flex-col items-center space-y-5">
					<img src={certificate} alt="" className="w-16 lg:w-28" />
					<p className="text-white text-center md:w-4/5 lg:w-3/5 font-medium">
						Transform your existing videos or podcasts into viral
						shorts
					</p>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
