import { useEffect, useState } from "react";
import {motion } from "framer-motion"

const Users = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("users.json")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
    
	return (
		<section className="flex flex-wrap justify-center gap-12 lg:gap-8 w-11/12 mx-auto py-20">
			{users.map((user, idx) => (
				<motion.div
					key={idx}
					className="text-center text-white flex flex-col items-center gap-3"
				>
					<img
						src={user.imageUrl}
						alt=""
						className="w-32 md:w-40 rounded-full"
					/>
					<p className="">{user.views}+</p>
				</motion.div>
			))}
		</section>
	);
};

export default Users;
