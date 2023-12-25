import Button from "../../component/Button/Button";


const Calender = () => {
    return (
		<div className="font-poppins text-white text-center w-11/12 mx-auto">
			<h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold pb-10 md:pb-16">
				Enough of generic videos edited for the sake of editing
			</h1>
			<p className="lg:text-lg pb-8 md:pb-14">
				Pick a plan of your choice and spice up your online presence
				today
			</p>
			<Button text={"Start Now"}></Button>
			{/* star fill */}
			<img
				src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fc1a63ad4bc0f51d3653b9_star%20filled.svg"
				alt=""
				className="relative w-10 md:w-16 left-56 md:left-[480px] lg:left-[1000px] -top-20 md:-top-24 lg:-top-32"
			/>
			{/* star no-fill */}
			<img
				src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb2c7ec087160e4c6764f3_Yellow%20Star.svg"
				alt=""
				className="relative w-6 md:w-10 left-14 md:left-40 lg:left-96 -top-20 md:-top-32 lg:-top-40"
			/>
			{/* star no-fill */}
			<img
				src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb2c7ec087160e4c6764f3_Yellow%20Star.svg"
				alt=""
				className="relative w-6 md:w-10 md:left-96 left-40 lg:left-[700px] -top-12 md:-top-20 lg:-top-20"
			/>
		</div>
	);
};

export default Calender;