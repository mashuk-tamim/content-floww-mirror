

const Footer = () => {
    return (
		<section className="text-white font-poppins w-11/12 mx-auto space-y-10 py-28">
			<div className="flex flex-col lg:flex-row justify-between gap-10">
				<div className="flex flex-col md:flex-row text-center md:justify-between lg:gap-5">
					<div>
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fadbb094b748a8ca80754f_ContentFloww%20Logo.png"
							alt="full logo"
							className="md:flex mx-auto"
						/>
					</div>
					<div>
						<p className="text-lg">
							210 Mall road , Delhi, India <br />
							124580
						</p>
					</div>
				</div>
				<div className="flex md:justify-between flex-col md:flex-row lg:flex-col gap-5">
					<div className="flex gap-4 justify-center lg:justify-end">
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fd4e486df00192e507a469_svgexport-17%20(5)%201.svg"
							alt=""
							className="w-8"
						/>
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fd4e62b5e959690e1272bc_twitter_5968958.svg"
							alt=""
							className="w-8"
						/>
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fd4ddff9318a593c332159_linkedin_3536569.svg"
							alt=""
							className="w-8"
						/>
					</div>
					<div className="flex gap-2 md:text-lg justify-center">
						<p>Say</p>
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fd4ee06e1ec3678307b807_hello.svg"
							alt=""
						/>
						<p>at</p>
						<p className="text-yellow underline">
							info@icontentflow.com
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row md:items-center items-center lg:justify-between gap-5 md:text-lg">
				<div className="flex flex-col md:flex-row">
					<a
						href=""
						className="border-b-2 md:border-b-0 border-r-0 md:border-r-2 py-4 md:px-4"
					>
						Privacy Policy
					</a>
					<a
						href=""
						className="border-b-2 md:border-b-0 border-r-0 md:border-r-2 py-4 md:px-4"
					>
						Refund Policy
					</a>
					<a href="" className="py-4 md:px-4">
						Terms of Use
					</a>
				</div>
				<div className="flex flex-col items-center lg:items-end">
					<div className="flex">
						<p>Designed with</p>
						<img
							src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fd511adb6ee793b9b76f78_red%20heart.svg"
							alt=""
						/>
						by
						<span className="text-yellow underline pl-1">
							theMerc
						</span>
					</div>
					<div>
						Developed by{" "}
						<span className="text-yellow underline">Jahid</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;