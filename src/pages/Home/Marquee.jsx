import Marquee from "react-fast-marquee";
import { FaCircle } from "react-icons/fa6";

const MarqueeSection = () => {
	return (
		<section className="mt-40 mb-32">
			<Marquee
				className="md:text-5xl lg:text-7xl font-bold h-32"
				speed={130}
			>
				<div>
					Let us understand your
					<span className="text-yellow pl-3">growth goals</span>
					<span className="inline-block">
						<FaCircle className="md:w-10 lg:w-10 text-coral relative md:top-3 lg:top-3 mx-10"></FaCircle>
					</span>
				</div>
				<div>
					We create
					<span className="text-yellow pl-3">Perfection</span>
					<span className="inline-block">
						<FaCircle className="md:w-10 lg:w-10 text-coral relative md:top-3 lg:top-3 mx-10"></FaCircle>
					</span>
				</div>
			</Marquee>
		</section>
	);
};

export default MarqueeSection;
