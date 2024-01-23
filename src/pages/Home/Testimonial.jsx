import video1 from "../../assets/videos/Ancient_Amazonian.mp4"
import heart from "../../assets/svg/64fb140be929f613abf78dee_Heart.svg";
import like from "../../assets/svg/64fb14209552ef390591774b_like.svg";
import quote from "../../assets/svg/64fb0d9a3dc59b592ac6cf08_quote.svg";
import thumbs_fill from "../../assets/svg/64fb142c51d65e51f3884619_thumb-up 1.svg";
import julian from "../../assets/images/julian_dorey.jpg" 
const Testimonial = () => {
	return (
		<section className="font-poppins pb-10" id="testimonial">
			<div className="relative flex justify-center">
				<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-dark tracking-wide">
					Snippets of
					<span className="text-yellow w-full mx-auto pl-4">
						Satisfaction
					</span>
				</h1>
				{/* heart */}
				<img
					src={heart}
					alt=""
					className="absolute -top-10 lg:-top-20 right-1/4 lg:right-1/3 w-14 "
				/>
				{/* like */}
				<img
					src={like}
					alt=""
					className="absolute -top-16 lg:-top-20 left-1/4 lg:left-1/3 w-14"
				/>
				{/* thumbs up fill */}
				<img
					src={thumbs_fill}
					alt=""
					className="absolute top-10 lg:top-24 w-14 left-1/2"
				/>
			</div>
			<div className="flex gap-3 items-center justify-center my-20 md:my-24 lg:my-32">
				<div className="hidden md:flex bg-[#fafafa] border px-2 pt-2 md:pb-8 lg:pb-14 rounded-2xl md:w-[150px] lg:w-56 md:h-[280px] lg:h-[430px]">
					{/* <ReactPlayer
						url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
					/> */}
					{/* <iframe
							src="https://www.youtube.com/embed/Q7trl-OysYY"
							// height={300}
							// width={170}
							style={{
								overflow: "hidden",
								borderRadius: "10px",
								width: "100%",
								height: "",
								paddingBottom: "",
							}}
							scrolling="no"
							// allow="autoplay; encrypted-media"
							// autoPlay
						></iframe> */}
					<video
						src={video1}
						controls
						autoPlay
						muted
						className="rounded-xl"
					></video>
				</div>
				<div className="bg-testimonialBg w-72 rounded-2xl h-[240px] md:h-[280px] lg:h-[430px] relative">
					<p className="text-sm md:text-base text-[#454545] font-semibold italic px-4 lg:px-5 pt-10 lg:pt-14 pb-5">
						“Their editing team is excellent. Its great when you
						have a team that always looks to turn it right back
						around no questions asked”
					</p>
					<div className="flex items-center px-5 gap-5">
						<img
							src={julian}
							alt=""
							className="rounded-full aspect-square w-12 lg:w-14 border-white border-2"
						/>
						<p className="text-black font-bold text-sm md:text-base">
							Julian Dorey
						</p>
					</div>
					<img
						src={quote}
						alt=""
						className="absolute -bottom-4 right-4"
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
