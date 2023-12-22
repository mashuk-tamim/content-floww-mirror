import { useEffect, useState } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    },[])
    return (
		<div className="flex justify-center gap-3 md:gap-5 lg:gap-8 w-11/12 mx-auto py-20">
			{users.map((user, idx) => (
				<div key={idx} className="flex flex-col items-center gap-3">
                    <img src={user.imageUrl} alt="" className="w-44 rounded-full" />
                    <p>{user.views}+</p>
				</div>
			))}
		</div>
	);
};

export default Users;