import logoFull from "../../../assets/images/64fadbb094b748a8ca80754f_ContentFloww Logo.png"
import instagram from "../../../assets/svg/instagram.svg"
import twitter from "../../../assets/svg/twitter.svg"
import linkedin from "../../../assets/svg/linkedin.svg"
import hello from "../../../assets/svg/hello.svg"
import redHeart from "../../../assets/svg/red_heart.svg"

const Footer = () => {
    return (
		<section className="text-white font-poppins w-11/12 mx-auto space-y-10 py-28 overflow-hidden">
			<div className="flex flex-col lg:flex-row justify-between gap-10">
				<div className="flex flex-col md:flex-row text-center md:justify-between lg:gap-5">
					<div>
						<img
							src={logoFull}
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
							src={instagram}
							alt=""
							className="w-8"
						/>
						<img
							src={twitter}
							alt=""
							className="w-8"
						/>
						<img
							src={linkedin}
							alt=""
							className="w-8"
						/>
					</div>
					<div className="flex gap-2 md:text-lg justify-center">
						<p>Say</p>
						<img
							src={hello}
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
							src={redHeart}
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