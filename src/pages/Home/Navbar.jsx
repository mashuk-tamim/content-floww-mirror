import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'
import Button from "../../component/Button/Button";
import { useState } from "react";

const navLinks = (
	<div className="flex flex-col lg:flex-row font-semibold md:text-white text-xs md:text-sm lg:text-base gap-6">
		<NavLink to="/" className="hover:text-[#f0b428]">
			Our Craft
		</NavLink>
		<NavLink to="/" className="hover:text-[#f0b428]">Results</NavLink>
		<NavLink to="/" className="hover:text-[#f0b428]">The Process</NavLink>
		<NavLink to="/" className="hover:text-[#f0b428]">Pricing</NavLink>
		<NavLink to="/" className="hover:text-[#f0b428]">FAQs</NavLink>
	</div>
);

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	
	return (
		<div className="navbar">
			<div className="navbar-start pl-3 lg:pl-16">
				<img
					src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fadbb094b748a8ca80754f_ContentFloww%20Logo.png"
					alt="full logo"
					className="hidden md:flex"
				/>
				<img
					src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/6515185a35220003dbc671fd_fontentfloww%20C%20logo.png"
					alt="full logo"
					className="flex md:hidden w-8"
				/>
			</div>
			<div className="navbar-center hidden lg:flex border-2 border-gray-500 rounded-2xl py-3 px-10">
				<ul className="menu menu-horizontal px-1">{navLinks}</ul>
			</div>
			<div className="navbar-end pr-3 relative lg:hidden">
				<button
					className="btn"
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
			<div className="navbar-end pr-3 lg:pr-16 hidden lg:flex z-10">
				<Button text='Start Now'></Button>
			</div>
		</div>
	);
};

export default Navbar;