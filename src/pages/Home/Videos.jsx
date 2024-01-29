import starLine from "../../assets/svg/64fc752bf3e576a13b51fa47_Group 3602.svg";
import starNoFilled from "../../assets/svg/64fb2c7ec087160e4c6764f3_Yellow Star no fill.svg";
import rocket from "../../assets/svg/64fc76c06b4ef83f4e3176c6_0885736b-4cf2-49b2-bd2d-rocket.svg";
import starFilled from "../../assets/svg/64fc1a63ad4bc0f51d3653b9_star filled.svg";
import video1 from "../../assets/videos/Palestinian_boy_cries_for_parents.mp4";
import video2 from "../../assets/videos/Palestine_West_Bank_reality.mp4";
import video3 from "../../assets/videos/Elon_Musk_EXPOSES.mp4";
import video4 from "../../assets/videos/BEFORE_You_Celebrate_CHRISTMAS.mp4";
// import video1 from "../../assets/videos/media_files";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Videos = () => {
    const svgRef = useRef(null);
	const videoRef = useRef(null);

	const isInView = useInView(svgRef, { once: false });
	const { scrollYProgress } = useScroll({
		target: videoRef,
		offset: ["0 1", "1 0"],
	});
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
	const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 8]);
	const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -8]);
	return (
		<section
			ref={svgRef}
			className="w-11/12 mx-auto my-28 py-28 font-poppins"
			id="videos"
		>
			<div className="w-full mx-auto relative">
				<img
					src={starLine}
					alt=""
					className="w-28 absolute md:-top-20 lg:-top-6 md:left-0 lg:left-20"
				/>
				<div className="space-y-6 w-3/5 mx-auto text-center flex flex-col">
					<div className="text-white md:text-4xl lg:text-6xl font-semibold flex relative">
						<div>
							<motion.img
								style={{
									scale: isInView ? 1 : 0,
									transitionDuration: "0.7s",
									transitionDelay: "0.3s",
								}}
								src={starNoFilled}
								alt=""
								className="w-10 absolute top-16"
							/>
						</div>
						<div className="md:ml-24 lg:ml-52">
							<p>Videos</p>
						</div>
						<div className="flex gap-28">
							{/* rocket */}
							<img
								src={rocket}
								alt=""
								className="w-8 md:w-12 absolute -top-4 md:right-24 lg:right-44"
							/>
							{/* star fill */}
							<motion.img
								style={{
									scale: isInView ? 1 : 0,
									transitionDuration: "0.7s",
									transitionDelay: "0.3s",
								}}
								src={starFilled}
								alt=""
								className="w-14 absolute top-12 md:-right-36 lg:-right-24"
							/>
						</div>
					</div>
					<p className="text-yellow md:text-6xl lg:text-7xl font-bold ml-24 w-full">
						that makes
					</p>
					<p className="text-white md:text-4xl lg:text-6xl font-semibold -ml-28 relative">
						your brand spread
						<span>
							<motion.img
								style={{
									scale: isInView ? 1 : 0,
									transitionDuration: "0.7s",
									transitionDelay: "0.3s",
								}}
								src={starNoFilled}
								alt=""
								className="w-8 absolute md:right-0 lg:right-10"
							/>
						</span>
					</p>
					<p className="text-yellow md:text-6xl lg:text-7xl font-bold">
						like wildfire
					</p>
					<div className="w-full text-center md:pt-10 lg:pt-10">
						<p className="text-white font-medium text-lg">
							We bring you consistent followers and turn them into
							raving fans!
						</p>
					</div>
				</div>
				{/* videos section */}
				<div
					ref={videoRef}
					className="flex flex-col md:flex-row py-10 justify-between items-center gap-6 md:gap-0 relative md:h-[350px] lg:h-[550px]"
				>
					<motion.div
						style={{
							y: y1,
							rotate: rotate2,
						}}
						className="hidden md:flex bg-black border px-2 pt-2 md:pb-8 lg:pb-14 rounded-2xl md:w-[150px] lg:w-56 md:h-[280px] lg:h-[430px] -rotate-6 -top-56 relative"
					>
						<video
							src={video1}
							controls
							autoPlay
							muted
							className="rounded-xl"
						></video>
					</motion.div>
					<motion.div
						style={{
							y: y2,
							rotate: rotate2,
						}}
						className="hidden md:flex bg-black border px-2 pt-2 md:pb-8 lg:pb-14 rounded-2xl md:w-[150px] lg:w-56 md:h-[280px] lg:h-[430px] -rotate-6 top-16 relative"
					>
						<video
							src={video2}
							controls
							autoPlay
							muted
							className="rounded-xl"
						></video>
					</motion.div>
					<motion.div
						style={{
							y: y2,
							rotate: rotate1,
						}}
						className="hidden md:flex bg-black border px-2 pt-2 md:pb-8 lg:pb-14 rounded-2xl md:w-[150px] lg:w-56 md:h-[280px] lg:h-[430px] rotate-6 top-16 relative"
					>
						{/* <ReactPlayer
						url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
					/> */}
						{/* <iframe
							src="https://www.youtube.com/embed/o6OamwqJM0s"
							// height={300}
							// width={170}
							style={{
								overflow: "hidden",
								borderRadius: "10px",
								width: "100%",
								height: "",
								paddingBottom: "",
							}}
							scrolling="no"
						></iframe> */}
						<video
							src={video3}
							controls
							autoPlay
							muted
							className="rounded-xl"
						></video>
					</motion.div>
					<motion.div
						style={{
							y: y1,
							rotate: rotate1,
						}}
						className="hidden md:flex bg-black border px-2 pt-2 md:pb-8 lg:pb-14 rounded-2xl md:w-[150px] lg:w-56 md:h-[280px] lg:h-[430px] rotate-6 -top-56 relative"
					>
						<video
							src={video4}
							controls
							autoPlay
							muted
							className="rounded-xl"
						></video>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Videos;
