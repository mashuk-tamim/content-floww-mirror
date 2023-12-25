
const Workflow = () => {
    return (
		<div className="bg-clientBg flex flex-col gap-28 md:gap-0 md:flex-row font-poppins py-28 md:py-40">
			<div className="w-11/12 mx-auto md:w-1/2 md:py-24 lg:py-16">
				<div className="w-4/5 mx-auto text-center">
					<h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-black lg:left-20">
						Smooth & easy
					</h2>
					<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold top-14 lg:top-20">
						Workflow
					</h1>
				</div>
			</div>
			<div className="w-11/12 md:w-1/2 mx-auto pl-0 lg:pl-16 ">
				<div className="bg-bnw-gradient md:w-80 lg:w-[510px] px-8 md:px-6 lg:px-8 py-20 rounded-2xl space-y-5">
					<img
						src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64ff21a9d47891944694eff7_Notion%20Logo%20(1).svg"
						alt=""
						className="w-24 md:w-24 lg:w-20"
					/>
					<p
						className="text-white font-medium md:font-semibold text-xl md:text-2xl lg:text-3xl md:tracking-wide"
						style={{ lineHeight: "1.5" }}
					>
						We help you with scripting and hooks on notion if
						required
					</p>
				</div>
			</div>
		</div>
	);
};

export default Workflow;