import video1 from "../../../assets/videos/Ancient_Amazonian.mp4";
import heart from "../../../assets/svg/64fb140be929f613abf78dee_Heart.svg";
import like from "../../../assets/svg/64fb14209552ef390591774b_like.svg";
import quote from "../../../assets/svg/64fb0d9a3dc59b592ac6cf08_quote.svg";
import thumbs_fill from "../../../assets/svg/64fb142c51d65e51f3884619_thumb-up 1.svg";
import julian from "../../../assets/images/julian_dorey.jpg";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const Testimonial = () => {
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const svgRef = useRef(null);

    const isInView = useInView(svgRef, { once: true });

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: sliderRef1,
        offset: ['0 1', '1 0']
    })
    const x1 = useTransform(scrollYProgress1, [0, 1], [-300, 0]);
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: sliderRef2,
        offset: ['0 1', '1 0']
    })
    const x2 = useTransform(scrollYProgress2, [0, 1], [0, -300]);
	return (
		<section
			className="font-poppins my-32 overflow-hidden"
			id="testimonial"
		>
			{/* heading */}
			<div ref={svgRef} className="relative flex justify-center my-20">
				<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-dark tracking-wide">
					Snippets of
					<span className="text-yellow w-full mx-auto pl-4">
						Satisfaction
					</span>
				</h1>
				{/* heart */}
				<motion.img
					style={{
						scale: isInView ? 1 : 0,
						transitionDuration: "0.7s",
					}}
					src={heart}
					alt=""
					className="absolute -top-10 lg:-top-20 right-1/4 lg:right-1/3 w-14 "
				/>
				{/* like */}
				<motion.img
					style={{
						scale: isInView ? 1 : 0,
						transitionDuration: "0.7s",
					}}
					src={like}
					alt=""
					className="absolute -top-16 lg:-top-20 left-1/4 lg:left-1/3 w-14"
				/>
				{/* thumbs up fill */}
				<motion.img
					style={{
						scale: isInView ? 1 : 0,
						transitionDuration: "0.7s",
					}}
					src={thumbs_fill}
					alt=""
					className="absolute top-10 lg:top-24 w-14 left-1/2"
				/>
			</div>
			{/* slider 1 */}
			<motion.div
				ref={sliderRef1}
				style={{
					x: x1,
				}}
				className="flex gap-10"
			>
				{[1, 2, 3, 4].map((i) => {
					return (
						<div key={i}>
							<div className="flex gap-3 items-center justify-center my-10">
								<div className="hidden md:flex bg-[#fafafa] border px-2 pt-2 md:pb-8 lg:pb-14 rounded-2xl md:w-[150px] lg:w-44 md:h-[280px] lg:h-[350px]">
									<video
										src={video1}
										controls
										autoPlay
										muted
										className="rounded-xl"
									></video>
								</div>
								<div className="bg-testimonialBg w-72 rounded-2xl h-[240px] md:h-[280px] lg:h-[350px] relative">
									<p className="text-sm md:text-base text-[#454545] font-semibold italic px-4 lg:px-5 pt-10 lg:pt-14 pb-5">
										“Their editing team is excellent. Its
										great when you have a team that always
										looks to turn it right back around no
										questions asked”
									</p>
									<div className="flex items-center px-5 gap-5">
										<img
											src={julian}
											alt=""
											className="rounded-full aspect-square w-12 lg:w-14 border-white border-2"
										/>
										<p className="text-black font-bold text-sm md:text-base">
											Julian Dorey
										</p>
									</div>
									<img
										src={quote}
										alt=""
										className="absolute -bottom-4 right-4"
									/>
								</div>
							</div>
						</div>
					);
				})}
			</motion.div>
			{/* slider 2 */}
			<motion.div
				ref={sliderRef2}
				style={{
					x: x2,
				}}
				className="flex gap-10 mb-10"
			>
				{[1, 2, 3, 4].map((i) => {
					return (
						<div key={i}>
							<div className="flex gap-3 items-center justify-center">
								<div className="hidden md:flex bg-[#fafafa] border px-2 pt-2 md:pb-8 lg:pb-14 rounded-2xl md:w-[150px] lg:w-44 md:h-[280px] lg:h-[350px]">
									<video
										src={video1}
										controls
										autoPlay
										muted
										className="rounded-xl"
									></video>
								</div>
								<div className="bg-testimonialBg w-72 rounded-2xl h-[240px] md:h-[280px] lg:h-[350px] relative">
									<p className="text-sm md:text-base text-[#454545] font-semibold italic px-4 lg:px-5 pt-10 lg:pt-14 pb-5">
										“Their editing team is excellent. Its
										great when you have a team that always
										looks to turn it right back around no
										questions asked”
									</p>
									<div className="flex items-center px-5 gap-5">
										<img
											src={julian}
											alt=""
											className="rounded-full aspect-square w-12 lg:w-14 border-white border-2"
										/>
										<p className="text-black font-bold text-sm md:text-base">
											Julian Dorey
										</p>
									</div>
									<img
										src={quote}
										alt=""
										className="absolute -bottom-4 right-4"
									/>
								</div>
							</div>
						</div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default Testimonial;