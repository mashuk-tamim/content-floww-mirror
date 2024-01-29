import crown from "../../assets/svg/crown_orange.svg";
import starNoFill from "../../assets/svg/64fb2c7ec087160e4c6764f3_Yellow Star no fill.svg";
import arrow from "../../assets/svg/arrow_orange.svg";
import pointArrow from "../../assets/svg/pricinf-arrow.svg";
import star from "../../assets/svg/6597f6da265c4ccf70b5e684_star-ta.svg";

import call from "../../assets/svg/call1.svg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../../component/Button3/BUtton3";

const Subscribe = () => {
    const cardRef = useRef(null);
    const svgRef = useRef(null);

	const isSvgInView = useInView(svgRef, { once: false });
	const isCardInView = useInView(cardRef, {
		once: true,
	});
	const delay = 0.3;

	return (
		<section className="bg-clientBg font-poppins overflow-hidden">
			<div
				ref={svgRef}
				className="flex flex-col items-center py-28 space-y-5 lg:space-y-8"
			>
				<div className="flex gap-3 md:gap-5 lg:right-44 relative lg:left-20">
					{/* star no fill*/}
					<motion.img
						style={{
							scale: isSvgInView ? 1 : 0,
							transitionDuration: "0.7s",
							transitionDelay: "0.3s",
						}}
						src={starNoFill}
						alt=""
						className="w-6 md:w-8 relative md:top-5 lg:top-10 -left-5"
					/>
					{/* crown */}
					<motion.img
						style={{
							scale: isSvgInView ? 1 : 0,
							transitionDuration: "0.7s",
							transitionDelay: "0.3s",
						}}
						src={crown}
						alt=""
						className="relative -top-10 lg:-top-14 left-[52px] lg:left-[68px] w-8 lg:w-12"
					/>
					<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow lg:relative font-bold text-center">
						Subscribe
					</h1>
					<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold relative text-black lg:right-0">
						today,
					</h2>
				</div>
				<div className="flex gap-3 md:gap-5">
					<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-black">
						Start Growing
					</h2>
					<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold">
						tomorrow
					</h1>
					{/* line */}
					<motion.img
						style={{
							y: isSvgInView ? 0 : 100,
							transitionDuration: "0.7s",
							transitionDelay: "0.3s",
						}}
						src={arrow}
						alt=""
						className="w-16 md:w-24 lg:w-36"
					/>
				</div>
				<div>
					<p className="text-black font-medium text-center mx-auto">
						Hire a personal team of expert copywriters and video
						artists in one click.<br></br> No contracts, no hiring,
						no management!
					</p>
				</div>
			</div>
			<div
				ref={cardRef}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 md:gap-5 lg:gap-8 w-full md:w-11/12 mx-auto"
			>
				{values.map((value) => {
					return (
						<motion.div
							style={{
								y: isCardInView ? "0px" : "100px",
								opacity: isCardInView ? 1 : 0,
								transitionDuration: "0.5s",
								transitionDelay: `${value.id * delay}s`,
							}}
							key={value.id}
						>
							<div
								className={`text-black ${value.cardBg} p-5 w-11/12 md:w-80 lg:w-[380px] lg:h-[710px] rounded-2xl shadow-xl`}
							>
								<div className="">
									<div className="flex justify-between">
										<p className="text-lg font-semibold">
											{value.plan}
										</p>
										{value.isMostTrending === "true" && (
											<p className="bg-[#ff7332] text-white rounded-bl-lg rounded-tr-2xl flex items-center h-8 p-2 -mt-5 -mr-5">
												Most Trending
											</p>
										)}
										{/* <div className="bg-[#ff7332] w-[40%] h-8 -mt-5 flex justify-end"></div> */}
									</div>
									<h2 className="text-4xl font-bold py-10">
										${value.price}/
										<span className="text-xl font-semibold relative">
											month
										</span>
									</h2>
									<p className="font-medium pb-8">
										{value.planIncludes}
									</p>
									<div className="pb-10">
										<Button
											text={value.btnText}
											btnBg={value.btnBg}
										></Button>
									</div>

									<div className="border-[0.5px] border-black"></div>
								</div>
								<div className="font-medium space-y-4 pt-8">
									{value.planDetails.map((i) => {
										return (
											<div key={i} className="flex gap-2">
												<img src={pointArrow} alt="" />
												<p
													className={`${
														i.isBold === "false"
															? "font-md"
															: "font-bold"
													} `}
												>
													{i.text}
												</p>
											</div>
										);
									})}
								</div>
								<div
									className={`${value.bestForBg} border-[1px] border-white text-[#ff7332] mt-5 p-2 rounded-xl flex items-center gap-2`}
								>
									<img
										src={star}
										alt=""
										className="w-6 md:w-8"
									/>
									<p>{value.bestFor}</p>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-5 text-black w-11/12 mx-auto pt-14 md:pt-20 pb-20 md:pb-28">
				<div className="border border-black rounded-2xl px-3 py-5 md:p-5 lg:px-12 lg:py-8 space-y-5 lg:col-span-2">
					<img src={call} alt="" className="w-20" />
					<h2 className="md:text-xl lg:text-4xl font-bold">
						Book a Call
					</h2>
					<p className="font-medium">Have custom requirement?</p>
					<div>
						<a
							href=""
							className="md:text-lg lg:text-xl text-[#cc8f00] font-semibold"
						>
							Book a Call
						</a>
						<img src="" alt="" />
					</div>
				</div>
				<div className="border border-black rounded-2xl px-3 py-5 md:p-5 lg:px-12 lg:py-8 space-y-5">
					<img src={call} alt="" className="w-20" />
					<h2 className="md:text-xl lg:text-4xl font-bold">
						Book a Call
					</h2>
					<p className="font-medium">Have custom requirement?</p>
					<div>
						<a
							href=""
							className="md:text-lg lg:text-xl text-[#cc8f00] font-semibold"
						>
							Book a Call
						</a>
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;

const values = [
	{
		id: 1,
		cardBg: "bg-[#fde7cc]",
		plan: "Basic",
		price: "2499",
		planIncludes: "20 Short videos",
		btnText: "Start Now",
		btnTextColor: "text-[#000000]",
		btnBg: "bg-[#000000]",
		isMostTrending: "false",
		planDetails: [
			{
				isBold: "false",
				text: "World-class editor",
			},
			{
				isBold: "false",
				text: "Personalized video branding",
			},
			{
				isBold: "false",
				text: "Pause or cancel anytime",
			},
			{
				isBold: "false",
				text: "24/7 Chat support",
			},
			{
				isBold: "false",
				text: "Dedicated social media manager",
			},
			{
				isBold: "false",
				text: "Unlimited revisions",
			},
			{
				isBold: "false",
				text: "Monthly growth reports",
			},
		],
		bestFor: "Best for podcasters",
		bestForBg: "bg-[#fef1e0]",
	},
	{
		id: 2,
		cardBg: "bg-[#faca91]",
		plan: "Growth",
		price: "3999",
		planIncludes: "15 Short videos + 10 animation edits",
		btnText: "Join Waitlist",
		btnTextColor: "text-[#000000]",
		btnBg: "bg-[#000000]",
		isMostTrending: "true",
		planDetails: [
			{
				isBold: "true",
				text: "Everything you get in Basic Plus:",
			},
			{
				isBold: "false",
				text: "Expert animator",
			},
			{
				isBold: "false",
				text: "Organic lead generation",
			},
			{
				isBold: "false",
				text: "Automation setup",
			},
		],
		bestFor: "Best for creators/ brands serious about organic growth",
		bestForBg: "bg-[#fcdfbd]",
	},
	{
		id: 3,
		cardBg: "bg-[#f7b05b]",
		plan: "Platinum",
		price: "6999",
		planIncludes: "Complete organic growth package",
		btnText: "Book a call",
		btnTextColor: "text-[#ffffff]",
		btnBg: "bg-[#ffffff]",
		isMostTrending: "false",
		planDetails: [
			{
				isBold: "false",
				text: "Strategy, ideation, scripting, management, lead generation, and monetization",
			},
			{
				isBold: "false",
				text: "Everything you will ever need to grow and monetize your brand with organic videos",
			},
			{
				isBold: "false",
				text: "Get an entire growth team for your brand",
			},
		],
		bestFor: "For Outliers",
		bestForBg: "bg-[#fad09d]",
	},
];
