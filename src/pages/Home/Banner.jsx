import Button from "../../component/Button/Button";
import oBg from "../../assets/svg/64fad820a80abcc43e9a6ade_4k_Abstract_3840x2160 1.webp";
import heroArrow from "../../assets/svg/hero-arrow.svg";
import bannerBg from "../../assets/svg/651438da4d065110b561b1b2_hero-bg-blocks.svg";

const Banner = () => {
	const bannerStyle = {
		backgroundImage: `url(${bannerBg})`,
	};
	return (
		<section
			className="font-poppins bg-cover bg-center w-full"
			style={bannerStyle}
		>
			<div className="bg-radial-gradient relative space-y-4 md:space-y-6 lg:space-y-8 pt-40">
				<div className="text-center text-white text-4xl md:text-6xl lg:text-[110px] font-extrabold">
					Crafting
				</div>
				<div className="text-center text-yellow text-4xl md:text-6xl lg:text-[110px] font-bold flex justify-center items-center gap-1 border-4 border-[#464646] bg-[#030113] rounded-full py-3 lg:py-5 w-4/5 md:w-3/4 lg:w-[1000px] mx-auto">
					<p>Short Vide</p>
					<img
						src={oBg}
						alt=""
						className="rounded-full h-10 md:h-16 lg:h-24"
					/>
					<p>s</p>
				</div>
				<div className="text-center text-white text-4xl md:text-6xl lg:text-[110px] font-extrabold">
					for viral growth
				</div>

				<img
					src={heroArrow}
					alt=""
					className="relative md:w-20 lg:w-36 md:-top-32 lg:-top-56 md:left-[650px] lg:left-[1200px]"
				/>
				<div className="flex flex-col md:flex-row gap-5 justify-center items-center relative -top-44">
					<Button text="View Pricing"></Button>
					<button className="button relative inline-flex justify-center items-center w-48 py-3.5 border-2 rounded-md bg-white border-white text-black font-semibold text-xl overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-1/2 before:top-0 before:w-0 before:h-0 before:rounded-full before:bg-yellow hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out">
						Book a Call
					</button>
				</div>
			</div>
		</section>
	);
};

export default Banner;
