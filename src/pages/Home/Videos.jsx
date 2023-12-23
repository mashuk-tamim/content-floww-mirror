const Videos = () => {
	return (
		<div className="w-11/12 mx-auto my-28 py-28 font-poppins">
			<div className="w-full mx-auto relative">
				<img
					src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fc752bf3e576a13b51fa47_Group%203602.svg"
					alt=""
					className="w-28 absolute md:-top-20 lg:-top-6 md:left-0 lg:left-20"
				/>
				<div className="space-y-6 w-3/5 mx-auto border text-center flex flex-col">
					<div className="text-white md:text-4xl lg:text-6xl font-semibold flex relative border">
						<div>
							<img
								src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb2c7ec087160e4c6764f3_Yellow%20Star.svg"
								alt=""
								className="w-10 absolute top-16"
							/>
						</div>
						<div className="md:ml-24 lg:ml-52">
							<p>Videos</p>
						</div>
						<div className="flex gap-28">
							{/* rocket */}
							<img
								src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fc76c06b4ef83f4e3176c6_0885736b-4cf2-49b2-bd2d-af4955164a0d%202.svg"
								alt=""
								className="w-8 md:w-12 absolute -top-4 md:right-24 lg:right-44"
							/>
							{/* star fill */}
							<img
								src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fc1a63ad4bc0f51d3653b9_star%20filled.svg"
								alt=""
								className="w-14 absolute top-12 md:-right-36 lg:-right-24"
							/>
						</div>
					</div>
					<p className="text-yellow md:text-6xl lg:text-7xl font-bold ml-24 w-full">
						that makes
					</p>
					<p className="text-white md:text-4xl lg:text-6xl font-semibold -ml-28 relative">
						your brand spread
						<span>
							<img
								src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb2c7ec087160e4c6764f3_Yellow%20Star.svg"
								alt=""
								className="w-8 absolute md:right-0 lg:right-10"
							/>
						</span>
					</p>
					<p className="text-yellow md:text-6xl lg:text-7xl font-bold">
						like wildfire
					</p>
					<div className="w-full text-center md:pt-10 lg:pt-16">
						<p className="text-white">
							We bring you consistent followers and turn them into
							raving fans!
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row py-10 justify-between items-center gap-6 md:gap-0 relative md:h-[350px] lg:h-[550px]">
					<img
						src="https://i.ibb.co/rb905hT/iphone-x.png"
						alt=""
						className="w-72 md:w-40 lg:w-72 -rotate-6 -top-32 md:absolute"
					/>
					<img
						src="https://i.ibb.co/rb905hT/iphone-x.png"
						alt=""
						className="w-72 md:w-40 lg:w-72 rotate-6 top-32 md:absolute right-1/4"
					/>
					<img
						src="https://i.ibb.co/rb905hT/iphone-x.png"
						alt=""
						className="w-72 md:w-40 lg:w-72 -rotate-6 top-32 md:absolute left-1/4"
					/>
					<img
						src="https://i.ibb.co/rb905hT/iphone-x.png"
						alt=""
						className="w-72 md:w-40 lg:w-72 rotate-6 -top-32 md:absolute right-0"
					/>
				</div>
			</div>
		</div>
	);
};

export default Videos;
