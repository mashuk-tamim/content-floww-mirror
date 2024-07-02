import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import PropTypes from "prop-types"; 

const Example = () => {
	return (
		<div className="">
			
			<HorizontalScrollCarousel />
			
		</div>
	);
};

const HorizontalScrollCarousel = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
        target: targetRef,
	});

	const y = useTransform(
		scrollYProgress,
		[0, 1.5],
		["0%", "-100%"]
	);

	return (
		<section className="relative h-[400vh] bg-[#f4eae9]">
			<div className="sticky top-40 flex overflow-hidden">
				<div className="w-11/12 mx-auto md:w-1/2 border">
					<div className="w-4/5 mx-auto text-center">
						<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-black lg:left-20">
							Smooth & easy
						</h2>
						<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold top-14 lg:top-20">
							Workflow
						</h1>
					</div>
				</div>

				<motion.div
                    style={{
                        y,

                    }}
					className="border w-1/2 flex flex-col gap-60 justify-center items-center"
					ref={targetRef}
				>
					{cards.map((card) => {
						return <Card card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
		</section>
	);
};

const Card = ({ card }) => {
	return (
		<div
			key={card.id}
			className="border-2 py-2 relative w-[600px]  bg-[#f4eae9]"
		>
			<div className="">
				<div className="bg-bnw-gradient md:w-80 lg:w-[510px] px-8 md:px-6 lg:px-8 py-20 rounded-2xl space-y-5">
					<img
						src={card.url}
						alt=""
						className="w-24 md:w-24 lg:w-20"
					/>
					<p
						className="text-white font-medium md:font-semibold text-xl md:text-2xl lg:text-3xl md:tracking-wide"
						style={{ lineHeight: "1.5" }}
					>
						{card.title}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Example;

const cards = [
	{
		url: "https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb4cb114e28a168849e54c_Send%20raw%20footage.svg",
		title: "Send your raw footage",
		id: 1,
	},
	{
		url: "https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64ff21a9d47891944694eff7_Notion%20Logo%20(1).svg",
		title: "We help you with scripting and hooks on notion if required",
		id: 2,
	},
	{
		url: "https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb4b4c734996aff9caa0c5_slack%20logo.svg",
		title: "Communicate with the team on slack.",
		id: 3,
	},
	{
		url: "https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64ff219b9619db627724edf2_Frame.io%20Logo%20.svg",
		title: "Give us feedback on Frame.io",
		id: 4,
	},
	{
		url: "https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64ff220d9f756b7f134ec2a7_hootsuite%20logo%20(1).svg",
		title: "Pubilsh or let our managers take care of publishing with hootsuite",
		id: 5,
	},
];


Card.propTypes = {
	card: PropTypes.object.isRequired,
};