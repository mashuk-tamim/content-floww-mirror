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
		<section className="flex flex-wrap justify-between items-center w-11/12 mx-auto py-20">
			{users.map((user, idx) => (
				<motion.div
					key={idx}
					className=" text-center text-white flex flex-col items-center justify-center gap-3 w-44 h-56"
					style={{}}
					initial={{}}
				>
					<motion.img
						src={user.imageUrl}
						alt=""
						className="w-32 md:w-40 rounded-full hover:border-4 hover:border-gray-600 hover:p-1 hover:w-[176px]"
						style={{
                            filter: "grayscale(100%)",
                            transformOrigin: "bottom"
                        }}
                        
					/>
					<p className="">{user.views}+</p>
				</motion.div>
			))}
		</section>
	);
};

export default Users;
