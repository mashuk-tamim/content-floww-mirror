import { useState } from "react";


const FAQ = () => {
	const [selectedAccordion, setSelectedAccordion] = useState("accordion-1");

	const handleAccordionChange = (accordion) => {
		setSelectedAccordion(accordion);
	};
	return (
		<section className="w-11/12 mx-auto space-y-5 text-white py-20 font-poppins">
			<h1 className="text-3xl md:text-5xl lg:text-7xl text-yellow font-bold text-center">
				FAQ&apos;s
			</h1>
			<div className="collapse collapse-arrow border-2 border-gray p-5">
				<input
					type="radio"
					name="accordion1"
					checked={selectedAccordion === "accordion1"}
					onChange={() => handleAccordionChange("accordion1")}
				/>
				<div className="collapse-title md:text-2xl lg:text-3xl font-medium">
					What happens after i pay?
				</div>
				<div className="collapse-content">
					<p>hello</p>
				</div>
			</div>
			<div className="collapse collapse-arrow border-2 border-gray p-5">
				<input
					type="radio"
					name="accordion1"
					checked={selectedAccordion === "accordion1"}
					onChange={() => handleAccordionChange("accordion1")}
				/>
				<div className="collapse-title md:text-2xl lg:text-3xl font-medium">
					What happens after i pay?
				</div>
				<div className="collapse-content">
					<p>hello</p>
				</div>
			</div>
			<div className="collapse collapse-arrow border-2 border-gray p-5">
				<input
					type="radio"
					name="accordion1"
					checked={selectedAccordion === "accordion1"}
					onChange={() => handleAccordionChange("accordion1")}
				/>
				<div className="collapse-title md:text-2xl lg:text-3xl font-medium">
					What happens after i pay?
				</div>
				<div className="collapse-content">
					<p>hello</p>
				</div>
			</div>
			<div className="collapse collapse-arrow border-2 border-gray p-5">
				<input
					type="radio"
					name="accordion1"
					checked={selectedAccordion === "accordion1"}
					onChange={() => handleAccordionChange("accordion1")}
				/>
				<div className="collapse-title md:text-2xl lg:text-3xl font-medium">
					What happens after i pay?
				</div>
				<div className="collapse-content">
					<p>hello</p>
				</div>
			</div>

			{/* Marquee */}
			{/* <div className="relative flex overflow-x-hidden md:text-6xl lg:text-8xl font-bold">
				<div className="py-12 animate-marquee whitespace-nowrap">
					<span className="">
						Let us understand your
						<span className="text-yellow pl-3">growth goals</span>
						<span className="inline-block">
							<FaCircle className="md:w-10 lg:w-12 text-coral relative md:top-3 lg:top-5 mx-3"></FaCircle>
						</span>
					</span>
					<span className="">
						We create
						<span className="text-yellow pl-3">Perfection</span>
						<span className="inline-block">
							<FaCircle className="md:w-10 lg:w-12 text-coral relative md:top-3 lg:top-5 mx-3"></FaCircle>
						</span>
					</span>
				</div>
			</div> */}
			
		</section>
	);
};

export default FAQ;
