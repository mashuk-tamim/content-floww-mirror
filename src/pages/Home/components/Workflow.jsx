import {
	motion,
	useInView,
	useScroll,
    useTransform,
} from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
import rawFootage from "../../../assets/svg/Send_raw_footage.svg"
import notion from "../../../assets/svg/Notion_Logo.svg"
import slack from "../../../assets/svg/slack _Logo.svg"
import frameIO from "../../../assets/svg/Frameio_Logo .svg"
import hootsuite from "../../../assets/svg/hootsuite_Logo.svg"
import leafNoFillTop from "../../../assets/svg/leaf_no_fill.svg";
import leafNoFillBottom from "../../../assets/svg/leaf_no_fill_below.svg";
import leafFill from "../../../assets/svg/leaf2.svg";


const Workflow = () => {

    const svgRef = useRef(null);
    const isInView = useInView(svgRef, { once: false });

	return (
		<section
			id="workflow"
			className="bg-clientBg flex flex-col md:flex-row gap-28 md:gap-0 lg:gap-0 justify-center font-poppins h-[400vh] relative pt-[20vh]"
		>
			<div className="w-11/12 mx-auto md:w-[50%] py-0 md:py-24 lg:py-16 border-red-500 h-[30vh] sticky top-36 mb-[20vh]">
				<div className="relative">
					<div
						ref={svgRef}
						className="flex flex-col items-center relative"
					>
						<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-black lg:left-20">
							Smooth & easy
						</h2>
						<motion.img
							src={leafNoFillTop}
							alt=""
							className="absolute -top-10 left-10"
							style={{
								rotate: isInView ? "0deg" : "720deg",
								transitionDuration: "1s",
							}}
						/>
						<motion.img
							src={leafFill}
							alt=""
							className="absolute -top-14 right-10"
							style={{
								rotate: isInView ? "0deg" : "720deg",
								transitionDuration: "1s",
							}}
						/>

						<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold relative -left-20 mt-5">
							Workflow
						</h1>
						<motion.img
							src={leafNoFillBottom}
							alt=""
							className="absolute top-28 right-40"
							style={{
								rotate: isInView ? "0deg" : "720deg",
								transitionDuration: "1s",
							}}
						/>
					</div>
				</div>
			</div>
			<div className="w-[50%]">
				{cards.map((card) => {
					return <Card card={card} key={card.id} />;
				})}
			</div>
		</section>
	);
};

const Card = ({ card }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["0 0.5", "0 0"]
    })
    const scale = useTransform(scrollYProgress, [0,1], [1, 0.7])
	return (
		<div
			ref={cardRef}
			key={card.id}
			// style={{ translateX: cardVariant }}
			className="sticky top-36 h-[70vh]"
		>
			<motion.div className="h-[380px] relative" style={{ scale }}>
				<div className=" h-full bg-bnw-gradient md:w-80 lg:w-[510px] px-8 md:px-6 lg:px-8 py-20 rounded-2xl space-y-5">
					<img
						src={card.url}
						alt=""
						className="w-24 md:w-24 lg:w-24 bg-black"
					/>
					<p
						className="text-white font-medium md:font-semibold text-xl md:text-2xl lg:text-3xl md:tracking-wide"
						style={{ lineHeight: "1.5" }}
					>
						{card.title}
					</p>
				</div>
			</motion.div>
		</div>
	);
};

const cards = [
	{
		url: rawFootage,
		title: "Send your raw footage",
		id: 1,
	},
	{
		url: notion,
		title: "We help you with scripting and hooks on notion if required",
		id: 2,
	},
	{
		url: slack,
		title: "Communicate with the team on slack.",
		id: 3,
	},
	{
		url: frameIO,
		title: "Give us feedback on Frame.io",
		id: 4,
	},
	{
		url: hootsuite,
		title: "Pubilsh or let our managers take care of publishing with hootsuite",
		id: 5,
	},
];

export default Workflow;

Card.propTypes = {
	card: PropTypes.object.isRequired,
};
