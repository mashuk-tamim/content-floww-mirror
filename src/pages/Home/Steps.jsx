import star_no_fill from "../../assets/svg/64fb2c7ec087160e4c6764f3_Yellow Star no fill.svg" 
import progress_arrow from "../../assets/svg/Yellow_Arrow.svg" 
import tape from "../../assets/svg/tape.svg" 
import cardImg from "../../assets/images/64fb309611b75356c1882c72_Frame 427320702.webp" 

const Steps = () => {
	return (
		<section className=" font-poppins w-11/12 mx-auto my-28 pt-20" id="steps">
			<div className="flex flex-col items-center relative">
				<div className="flex gap-3 md:gap-5 absolute md:right-44">
					{/* star */}
					<img
						src={star_no_fill}
						alt=""
						className="absolute left-10 md:-left-10 lg:-left-20 -top-7 md:-bottom-5 w-6 md:w-8"
					/>
					<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold">
						Simple
					</h1>
					<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white">
						3-step process
					</h2>
				</div>
				<div className="flex gap-3 md:gap-5 absolute top-12 md:top-20 lg:top-28 md:left-0 lg:left-32">
					<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white">
						to make your brand
					</h2>
					<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold">
						Go Big!
					</h1>
					{/* line */}
					<img
						src={progress_arrow}
						alt=""
						className="w-16 md:w-24 lg:w-36 absolute right-0 -top-24 md:top-0 md:-right-32 lg:-right-64"
					/>
				</div>
			</div>
			<div className="mt-40 md:mt-80 flex flex-col md:flex-row gap-5 justify-center items-center w-full mx-auto">
				<div className="w-4/5">
					<div className="relative">
						{/* tape */}
						<img
							src={tape}
							alt=""
							className="rotate-6 w-36 absolute left-1/3 md:left-10 lg:left-1/3 -top-6"
						/>
						<img
							src={cardImg}
							alt=""
							className="w-96 md:w-56 lg:w-96 rounded-3xl"
						/>
						<p className="absolute text-coral right-5 -bottom-16 md:-bottom-10 lg:-bottom-16 text-8xl md:text-7xl lg:text-8xl font-bold">
							02
						</p>
					</div>
					<div className="md:w-56 lg:w-96 my-20 md:my-10 lg:my-20 space-y-7 tracking-wide">
						<h2 className="text-white text-4xl md:text-3xl lg:text-4xl font-semibold">
							Create a fresh style
						</h2>
						<p className="text-white font-medium">
							Our animators and video artists will create a unique
							style for your brand.
						</p>
					</div>
				</div>
				<div className="w-4/5">
					<div className="relative">
						{/* tape */}
						<img
							src={tape}
							alt=""
							className="rotate-6 w-36 absolute left-1/3 md:left-10 lg:left-1/3 -top-6"
						/>
						<img
							src={cardImg}
							alt=""
							className="w-96 md:w-56 lg:w-96 rounded-3xl"
						/>
						<p className="absolute text-coral right-5 -bottom-16 md:-bottom-10 lg:-bottom-16 text-8xl md:text-7xl lg:text-8xl font-bold">
							02
						</p>
					</div>
					<div className="md:w-56 lg:w-96 my-20 md:my-10 lg:my-20 space-y-7 tracking-wide">
						<h2 className="text-white text-4xl md:text-3xl lg:text-4xl font-semibold">
							Create a fresh style
						</h2>
						<p className="text-white font-medium">
							Our animators and video artists will create a unique
							style for your brand.
						</p>
					</div>
				</div>
				<div className="w-4/5">
					<div className="relative">
						{/* tape */}
						<img
							src={tape}
							alt=""
							className="rotate-6 w-36 absolute left-1/3 md:left-10 lg:left-1/3 -top-6"
						/>
						<img
							src={cardImg}
							alt=""
							className="w-96 md:w-56 lg:w-96 rounded-3xl"
						/>
						<p className="absolute text-coral right-5 -bottom-16 md:-bottom-10 lg:-bottom-16 text-8xl md:text-7xl lg:text-8xl font-bold">
							02
						</p>
					</div>
					<div className="md:w-56 lg:w-96 my-20 md:my-10 lg:my-20 space-y-7 tracking-wide">
						<h2 className="text-white text-4xl md:text-3xl lg:text-4xl font-semibold">
							Create a fresh style
						</h2>
						<p className="text-white font-medium">
							Our animators and video artists will create a unique
							style for your brand.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Steps;
