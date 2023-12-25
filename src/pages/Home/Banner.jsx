import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "../../component/Button/Button";

const Banner = () => {
    useEffect(() => {
		AOS.init();
	}, []);
    return (
		<div className="font-poppins  bg-banner-pattern bg-cover bg-center">
			<div className="bg-radial-gradient relative space-y-4 md:space-y-6 lg:space-y-8 py-32 ">
				<div
					className="text-center text-white text-4xl md:text-6xl lg:text-8xl font-extrabold"
					data-aos="zoom-in"
					data-aos-offset="0"
					data-aos-delay="0"
					data-aos-duration="2000"
					data-aos-easing="true"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					Crafting
				</div>
				<div
					className="text-center text-yellow text-4xl md:text-6xl lg:text-8xl font-bold flex justify-center items-center gap-1 border-2 border-gray rounded-full py-3 lg:py-5 w-4/5 md:w-3/4 lg:w-3/5 mx-auto"
					data-aos="zoom-in"
					data-aos-offset="0"
					data-aos-delay="250"
					data-aos-duration="2000"
					data-aos-easing="true"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<p>Short Vide</p>
					<img
						src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fad820a80abcc43e9a6ade_4k_Abstract_3840x2160%201.webp"
						alt=""
						className="rounded-full h-10 md:h-16 lg:h-24"
					/>
					<p>s</p>
				</div>
				<div
					className="text-center text-white text-4xl md:text-6xl lg:text-8xl font-extrabold"
					data-aos="zoom-in"
					data-aos-offset="0"
					data-aos-delay="500"
					data-aos-duration="2000"
					data-aos-easing="true"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					for viral growth
				</div>
				<div className="flex flex-col md:flex-row gap-5 justify-center items-center">
					<Button text="View Pricing"></Button>
					<Button text="Book Call"></Button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
