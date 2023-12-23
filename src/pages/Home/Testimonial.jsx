
const Testimonial = () => {
	return (
		<div className="font-poppins pb-10">
			<div className="relative flex justify-center">
				<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-dark tracking-wide">
					Snippets of
					<span className="text-yellow w-full mx-auto pl-4">
						Satisfaction
					</span>
				</h1>
				{/* heart */}
				<img
					src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb140be929f613abf78dee_Heart.svg"
					alt=""
					className="absolute -top-10 lg:-top-20 right-1/4 lg:right-1/3 w-14 "
				/>
				{/* thumbs up no-fill */}
				<img
					src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb14209552ef390591774b_like.svg"
					alt=""
					className="absolute -top-16 lg:-top-20 left-1/4 lg:left-1/3 w-14"
				/>
				{/* thumbs up fill */}
				<img
					src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb142c51d65e51f3884619_thumb-up%201.svg"
					alt=""
					className="absolute top-10 lg:top-24 w-14 left-1/2"
				/>
			</div>
			<div className="flex gap-3 items-center justify-center my-20 md:my-24 lg:my-32">
				<div className="hidden md:flex bg-offWhite px-2 pt-2 md:pb-8 lg:pb-14 rounded-2xl md:w-[150px] lg:w-44 md:h-[280px] lg:h-[348px]">
					{/* <ReactPlayer
						url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
					/> */}
					<iframe
						src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F863981335%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F863981335&image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1723358553-ea2fdec815adaf9b93189140da66df1486d1386b29a85842f1acc33d0ca74106-d_640&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo"
						// height={300}
						// width={170}
						style={{
							overflow: "hidden",
                            borderRadius: "10px",
                            width: '100%',
                            height: '',
                            paddingBottom: '',
                        }}
                        scrolling="no"
					></iframe>
				</div>
				<div className="bg-testimonialBg w-72 rounded-2xl h-[240px] md:h-[280px] lg:h-[348px] relative">
					<p className="text-sm md:text-base text-[#454545] font-semibold italic px-4 lg:px-5 pt-10 lg:pt-14 pb-5">
						“Their editing team is excellent. Its great when you
						have a team that always looks to turn it right back
						around no questions asked”
					</p>
					<div className="flex items-center px-5 gap-5">
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/65110435344b427fd42697e4_julian-profile-pic.webp"
							alt=""
							className="rounded-full w-12 lg:w-14 border-white border-2"
						/>
						<p className="text-black font-bold text-sm md:text-base">Julian Dorey</p>
					</div>
					<img
						src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb0d9a3dc59b592ac6cf08_quote.svg"
                        alt=""
                        className="absolute -bottom-4 right-4"
					/>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
