import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const OurImpact = () => {
	const controls = useAnimation();
	const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "100px"
	});
	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [controls, isInView]);

	return (
		<section>
			<motion.div
				className="rounded-lg bg-gradient-to-br from-goldenrod via-offWhite to-coral p-1  w-11/12 mx-auto"
				ref={ref}
				animate={controls}
				initial="hidden"
				transition={{ duration: 1, delay: 0.1 }}
				variants={{
					visible: { rotateX: 0 },
					hidden: { rotateX: 70 },
				}}
			>
				<div className="bg-black p-2 rounded-[6px]">
					<div className="rounded-[calc(1.5rem-1px)] py-10 space-y-10 md:space-y-16 lg:space-y-20 font-poppins">
						<h1 className="text-yellow font-semibold text-xl md:text-3xl lg:text-5xl text-center">
							Unveiling Our Impact
						</h1>
						{/* <h1 className="bg-gradient-to-b from-black to-coral bg-clip-text text-transparent">Unveiling Our Impact</h1> */}
						<div className="flex flex-col md:flex-row text-white font-semibold text-3xl md:text-5xl lg:text-7xl  justify-between w-full gap-5 px-2 text-center">
							<div className="space-y-2">
								<p>75,023,489</p>
								<p>organic views</p>
							</div>
							<div className="border border-gray w-20 md:w-0 mx-auto md:h-16 lg:h-20 my-auto"></div>
							<div className="space-y-2">
								<p>1,000,000 +</p>
								<p>followers</p>
							</div>
						</div>
						<p className="text-white font-semibold text-xl md:text-3xl lg:text-5xl text-center">
							and counting...
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default OurImpact;
