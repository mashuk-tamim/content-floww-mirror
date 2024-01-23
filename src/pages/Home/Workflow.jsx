import {
	motion,
	useScroll,
    useTransform,
} from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
const Workflow = () => {

	return (
        <section
			id="workflow"
			className="bg-clientBg grid grid-cols-2 md:flex-row gap-28 md:gap-0 lg:gap-0 justify-center font-poppins pt-[20vh] overflow-visible h-[500vh]"
		>
			<div className="w-11/12 mx-auto md:w-[50%] py-0 md:py-24 lg:py-16 border-red-500 h-[30vh] sticky top-36 bottom-36 mb-[70vh]">
				<div className="flex flex-col items-center">
					<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-black lg:left-20">
						Smooth & easy
					</h2>
					<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold ">
						Workflow
					</h1>
				</div>
			</div>
			<div className="w-[50%]">
				{cards.map((card) => {
					return (
						<Card
							card={card}
							key={card.id}
						/>
					);
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
			className="sticky top-36 h-[100vh]"
		>
			<motion.div className="h-[380px]" style={{scale}}>
				<div className="h-full bg-bnw-gradient md:w-80 lg:w-[510px] px-8 md:px-6 lg:px-8 py-20 rounded-2xl space-y-5">
					<img
						src={card.url}
						alt=""
						className="w-24 md:w-24 lg:w-20 bg-black"
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
		url: "https://i.ibb.co/6P4jqcb/Send-raw-footage.jpg",
		title: "Send your raw footage",
		id: 1,
	},
	{
		url: "https://i.ibb.co/zhgkZbn/Notion-Logo.jpg",
		title: "We help you with scripting and hooks on notion if required",
		id: 2,
	},
	{
		url: "https://i.ibb.co/bdT3gcB/slack-Logo.jpg",
		title: "Communicate with the team on slack.",
		id: 3,
	},
	{
		url: "https://i.ibb.co/YBtsJWZ/Frameio-Logo.jpg",
		title: "Give us feedback on Frame.io",
		id: 4,
	},
	{
		url: "https://i.ibb.co/SRnQZGM/hootsuite-Logo.jpg",
		title: "Pubilsh or let our managers take care of publishing with hootsuite",
		id: 5,
	},
];

export default Workflow;

Card.propTypes = {
	card: PropTypes.object.isRequired,
	cardVariant: PropTypes.object.isRequired,
};
