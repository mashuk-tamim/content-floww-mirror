import crown from "../../assets/svg/crown_orange.svg"
import starNoFill from "../../assets/svg/64fb2c7ec087160e4c6764f3_Yellow Star no fill.svg"
import arrow from "../../assets/svg/arrow_orange.svg"
import pointArrow from "../../assets/svg/pricinf-arrow.svg"
import call from "../../assets/svg/call1.svg"


const Subscribe = () => {
    return (
		<section className="bg-clientBg font-poppins" id="subscribe">
			<div className="flex flex-col items-center py-28 space-y-5 lg:space-y-8">
				<div className="flex gap-3 md:gap-5 lg:right-44 relative lg:left-20">
					{/* star no fill*/}
					<img
						src={starNoFill}
						alt=""
						className="w-6 md:w-8 relative md:top-5 lg:top-10 -left-5"
					/>
					{/* crown */}
					<img
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
					<img src={arrow} alt="" className="w-16 md:w-24 lg:w-36" />
				</div>
				<div>
					<p className="text-black font-medium text-center mx-auto">
						Hire a personal team of expert copywriters and video
						artists in one click.<br></br> No contracts, no hiring,
						no management!
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 md:gap-5 lg:gap-10 w-full md:w-11/12 mx-auto">
				<div className="text-black bg-[#fde7cc] p-5 w-11/12 md:w-80 lg:w-[400px] rounded-2xl shadow-xl">
					<div className="">
						<p className="text-lg font-semibold">Basic</p>
						<h2 className="text-4xl font-bold py-10">
							$1999/
							<span className="text-xl font-semibold relative top-2">
								month
							</span>
						</h2>
						<p className="font-medium pb-8">20 Videos a month</p>
						{/* <Button text="Start Now"></Button> */}
						<div className="pb-10">
							<button className="button relative inline-flex justify-center border-black items-center w-full py-3 border-2 rounded-md bg-black text-white font-semibold text-xl tracking-widest overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-1/2 before:top-0 before:w-0 before:h-0 before:rounded-full before:bg-yellow hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out hover:bg-yellow">
								Start Now
							</button>
						</div>

						<hr />
					</div>
					<div className="font-medium space-y-4 pt-8">
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>World-class editor</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>Personalized video branding</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>Pause or cancel anytime</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>24/7 Chat support</p>
						</div>
					</div>
				</div>
				<div className="text-black bg-[#faca91] p-5 w-11/12 md:w-80 lg:w-[400px] rounded-2xl shadow-xl">
					<div className="">
						<p className="text-lg font-semibold">Basic</p>
						<h2 className="text-4xl font-bold py-10">
							$1999/
							<span className="text-xl font-semibold relative top-2">
								month
							</span>
						</h2>
						<p className="font-medium pb-8">20 Videos a month</p>
						{/* <Button text="Start Now"></Button> */}
						<div className="pb-10">
							<button className="button relative inline-flex justify-center border-black items-center w-full py-3 border-2 rounded-md bg-black text-white font-semibold text-xl tracking-widest overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-1/2 before:top-0 before:w-0 before:h-0 before:rounded-full before:bg-yellow hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out hover:bg-yellow">
								Start Now
							</button>
						</div>

						<hr />
					</div>
					<div className="font-medium space-y-4 pt-8">
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>World-class editor</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>Personalized video branding</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>Pause or cancel anytime</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>24/7 Chat support</p>
						</div>
					</div>
				</div>
				<div className="text-black bg-[#f7b05b] p-5 w-11/12 md:w-80 lg:w-[400px] rounded-2xl shadow-xl">
					<div className="">
						<p className="text-lg font-semibold">Basic</p>
						<h2 className="text-4xl font-bold py-10">
							$1999/
							<span className="text-xl font-semibold relative top-2">
								month
							</span>
						</h2>
						<p className="font-medium pb-8">20 Videos a month</p>
						{/* <Button text="Start Now"></Button> */}
						<div className="pb-10">
							<button className="button relative inline-flex justify-center border-black items-center w-full py-3 border-2 rounded-md bg-black text-white font-semibold text-xl tracking-widest overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-1/2 before:top-0 before:w-0 before:h-0 before:rounded-full before:bg-yellow hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out hover:bg-yellow">
								Start Now
							</button>
						</div>

						<hr />
					</div>
					<div className="font-medium space-y-4 pt-8">
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>World-class editor</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>Personalized video branding</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>Pause or cancel anytime</p>
						</div>
						<div className="flex gap-2">
							<img src={pointArrow} alt="" />
							<p>24/7 Chat support</p>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-5 text-black w-11/12 mx-auto pt-14 md:pt-20 pb-20 md:pb-28">
				<div className="border border-black rounded-2xl px-3 py-5 md:p-5 lg:px-12 lg:py-8 space-y-5 lg:col-span-2">
					<img
						src={call}
						alt=""
						className="w-20"
					/>
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
					<img
						src={call}
						alt=""
						className="w-20"
					/>
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