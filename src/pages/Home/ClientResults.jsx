
const ClientResults = () => {
    return (
		<div className="bg-clientBg w-11/12 mx-auto font-poppins relative px-8 lg:px-12 pt-28 pb-14 rounded-[30px] lg:rounded-[70px] space-y-0">
			<h2 className="text-black font-semibold text-4xl lg:text-6xl">
				Deep dive on
			</h2>
			<h1 className="text-yellow font-bold text-6xl lg:text-8xl pt-5 pb-10">
				Client Results
			</h1>
			<img
				src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb1bf7246f0314b3bb34b4_arrow%20projects.svg"
				alt=""
				className="absolute top-14 md:top-12 lg:top-10 left-64 md:left-[270px] lg:left-1/3 w-32 md:w-36 lg:w-44"
			/>
			<div className="bg-white p-10 lg:p-16 rounded-3xl md:rounded-[30px] lg:rounded-[40px]">
				<div className="flex justify-between items-center border-b border-black">
					<p className="text-2xl md:text-3xl lg:text-4xl text-black md:font-medium lg:font-semibold w-full py-6 lg:py-10">
						Parmita Katkar
					</p>
					<a href="">
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb18b8a8916b03b1eb3027_projects-arrow.svg"
							alt=""
							className="w-8"
						/>
					</a>
				</div>
				<div className="flex justify-between items-center border-b border-black">
					<p className="text-2xl md:text-3xl lg:text-4xl text-black md:font-medium lg:font-semibold w-full py-6 lg:py-10">
						Julian Dorey
					</p>
					<a href="">
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb18b8a8916b03b1eb3027_projects-arrow.svg"
							alt=""
							className="w-8"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ClientResults;