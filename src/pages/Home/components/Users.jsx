import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import instagramHover from "../../../assets/svg/65117cc3431493a95c4e5954_insta-hover.svg";
import youtubeHover from "../../../assets/svg/6512d1714a9e9a508d2ba1d6_hover-youtube.svg";
import FramerMagnetic from "../../../component/FramerMagnetic/FramerMagnetic";

const Users = () => {
	const [isHOvered, setIsHovered] = useState(false);
	const [userId, setUserId] = useState(0);

	const handleMouseEnter = (userId) => {
		setUserId(userId);
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
		// console.log(isHOvered);
	};
	// const [users, setUsers] = useState([]);
	useEffect(() => {
		// console.log(isHOvered);
	}, [isHOvered]);

	return (
		<section className="flex flex-wrap justify-between items-center w-11/12 mx-auto py-20 box-border">
			{userDetails.map((user) => {
				// const userId = user.id;
				return (
					<div key={user.id}>
						<FramerMagnetic>
							<div>
								<div>
									<motion.div
										className={`relative text-center text-white flex flex-col items-center justify-center gap-3 size-44 rounded-full hover:border-2 hover:border-gray-600 p-2 hover:p-1 ${
											isHOvered && userId === user.id
												? "grayscale-0"
												: "grayscale"
										} grayscale mb-3`}
										style={{}}
										initial={{}}
										onMouseEnter={() =>
											handleMouseEnter(user.id)
										}
										onMouseLeave={() =>
											handleMouseLeave(user.id)
										}
									>
										<motion.img
											src={user.imageUrl}
											alt=""
											className={`rounded-full`}
										/>
										{isHOvered && userId === user.id ? (
											<img
												src={user.hoverImageUrl}
												alt="hover"
												className="absolute top-0 w-full"
											/>
										) : (
											<></>
										)}
									</motion.div>
								</div>
							</div>
						</FramerMagnetic>
						<div className="flex justify-center mb-3">
							<p className={""}>{user.views}+</p>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Users;

const userDetails = [
	{
		id: 1,
		imageUrl: "https://i.ibb.co/VT7sQzf/user1-min.jpg",
		hoverImageUrl: instagramHover,
		views: "1.5M",
	},
	{
		id: 2,
		imageUrl: "https://i.ibb.co/VT7sQzf/user1-min.jpg",
		hoverImageUrl: youtubeHover,
		views: "2.5M",
	},
	{
		id: 3,
		imageUrl: "https://i.ibb.co/VT7sQzf/user1-min.jpg",
		hoverImageUrl: youtubeHover,
		views: "385K",
	},
	{
		id: 4,
		imageUrl: "https://i.ibb.co/VT7sQzf/user1-min.jpg",
		hoverImageUrl: youtubeHover,
		views: "1M",
	},
	{
		id: 5,
		imageUrl: "https://i.ibb.co/VT7sQzf/user1-min.jpg",
		hoverImageUrl: instagramHover,
		views: "1M",
	},
	{
		id: 6,
		imageUrl: "https://i.ibb.co/VT7sQzf/user1-min.jpg",
		hoverImageUrl: instagramHover,
		views: "154K",
	},
];
