import oBg from "../../../assets/svg/64fad820a80abcc43e9a6ade_4k_Abstract_3840x2160 1.webp";
import heroArrow from "../../../assets/svg/hero-arrow.svg";
import bannerBg from "../../../assets/svg/651438da4d065110b561b1b2_hero-bg-blocks.svg";
import { motion } from "framer-motion";
import Button from "../../../component/Button/Button";

const Banner = () => {
	const bannerStyle = {
		backgroundImage: `url(${bannerBg})`,
    };
	return (
		<section
			className="font-poppins bg-cover bg-center max-w-6xl mx-auto"
			style={bannerStyle}
		>
			<div className="bg-radial-gradient relative space-y-4 md:space-y-6 lg:space-y-8 pt-40">
				<div className=" space-y-4 md:space-y-6 lg:space-y-8">
					<motion.div
						className="text-center text-white text-4xl md:text-6xl lg:text-[110px] font-extrabold"
						initial={{ opacity: 0, scale: 0.4 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: "easeInOut",
							delay: 0.1,
						}}
					>
						Crafting
					</motion.div>
					<motion.div
						className="text-center text-yellow text-4xl md:text-6xl lg:text-[110px] font-bold flex justify-center items-center gap-1 border-4 border-[#464646] bg-[#030113] rounded-full py-3 lg:py-5 w-4/5 md:w-3/4 lg:w-[1000px] mx-auto"
						initial={{ opacity: 0, scale: 0.3 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.2,
						}}
					>
						<p>Short Vide</p>
						<img
							src={oBg}
							alt=""
							className="rounded-full h-10 md:h-16 lg:h-24"
						/>
						<p>s</p>
					</motion.div>
					<motion.div
						className="text-center text-white text-4xl md:text-6xl lg:text-[110px] font-extrabold"
						initial={{ opacity: 0, scale: 0.4 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.3,
						}}
					>
						for viral growth
					</motion.div>
				</div>

				<motion.img
					src={heroArrow}
					alt=""
					className="relative w-8 md:w-20 lg:w-36 -top-12 md:-top-32 lg:-top-56 left-[350px] md:left-[650px] lg:left-[1050px]"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						ease: "easeInOut",
						delay: 0.4,
					}}
				/>
				<div className="flex flex-col md:flex-row gap-5 justify-center items-center relative md:-top-24 lg:-top-44">
					<Button text="View Pricing" btnBg="bg-[#000000]"></Button>
					<Button text="Book a Call" btnBg="bg-[#ffffff]"></Button>
				</div>
			</div>
		</section>
	);
};

export default Banner;
