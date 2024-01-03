import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import Button from "../../component/Button/Button";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logoFull from '../../assets/images/64fadbb094b748a8ca80754f_ContentFloww Logo.png'
import logoShort from '../../assets/images/6515185a35220003dbc671fd_fontentfloww C logo.png'

const navLinks = (
	<div className="flex flex-col lg:flex-row font-semibold text-white text-xs md:text-sm lg:text-base gap-6">
		<NavLink to="/" className="hover:text-coral">
			Our Craft
		</NavLink>
		<NavLink to="/" className="hover:text-coral">
			Results
		</NavLink>
		<NavLink to="/" className="hover:text-coral">
			The Process
		</NavLink>
		<NavLink to="/" className="hover:text-coral">
			Pricing
		</NavLink>
		<NavLink to="/" className="hover:text-coral">
			FAQs
		</NavLink>
	</div>
);

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const [navTwo, setNavTwo] = useState(false);

	const { scrollY } = useScroll();

	// useEffect(() => {
	//     const unsubscribe = scrollY.on("change", (latest) => console.log(latest));

	//     return () => {
	//         unsubscribe();
	//     }
	// },[scrollY])

	useMotionValueEvent(scrollY, "change", (latest) => {
		// const previous = scrollY.getPrevious();
		// console.log(previous, latest);
		// if (latest > previous && latest > 450) {
		// 	setHidden(true);
		// } else {
		// 	setHidden(false);
		// }
		console.log(latest);
		if (latest > 800) {
            setNavTwo(true);
		} else {
            setNavTwo(false);
		}
    });
    

    useEffect(() => {
        console.log(navTwo);
    },[navTwo])

	return (
		<motion.nav
			// variants={{
			// 	visible: { y: 0 },
			// 	hidden: { y: "-100%" },
			// }}
			// animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className="flex w-full fixed justify-between z-10 pt-2"
		>
			{navTwo || (
				<div className="navbar-start pl-3 lg:pl-16 flex items-center">
					<img
						src={logoFull}
						alt="full logo"
						className="hidden md:flex"
					/>
					<div>
						{navTwo || (
							<div>
								<img
                                    src={logoShort}
									alt="full logo"
									className="flex md:hidden w-8"
								/>
							</div>
						)}
					</div>
				</div>
			)}
			{navTwo ? (
				<div className="w-full flex justify-center">
					<div className="navbar-center hidden lg:flex border-2 border-[#464646] rounded-2xl py-3 px-10 bg-black h-[70px] gap-3 justify-center">
						<ul className="menu menu-horizontal px-1">
							{navLinks}
						</ul>
						<div className="h-3/5 border my-auto"></div>
						<button className="button relative inline-flex justify-center items-center w-44 py-2 border-2 rounded-md border-white text-white font-semibold text-xl overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-1/2 before:top-0 before:w-0 before:h-0 before:rounded-full before:bg-yellow hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out">
							Start Now
						</button>
                    </div>
				</div>
			) : (
				<div className="navbar-center hidden lg:flex border-2 border-[#464646] rounded-2xl py-3 px-10 bg-black">
					<ul className="menu menu-horizontal px-1">{navLinks}</ul>
				</div>
			)}

			<div className="relative md:hidden pr-5 flex items-center">
				<button
					className="text-white"
					onClick={() => {
						setMenu(!menu);
					}}
				>
                    <GiHamburgerMenu />
				</button>
				<div className="absolute top-16 w-full">
					{menu && <div className="bg-black p-10">{navLinks}</div>}
				</div>
			</div>
			{navTwo || (
				<div className="navbar-end pr-3 lg:pr-16 hidden lg:flex z-10">
					<Button text="Start Now"></Button>
				</div>
			)}
		</motion.nav>
	);
};

export default Navbar;
