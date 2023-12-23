import Banner from "./Banner";
import ClientResults from "./ClientResults";
import Navbar from "./Navbar";
import OurImpact from "./OurImpact";
import Testimonial from "./Testimonial";
import Users from "./Users";
import Videos from "./Videos";

const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
            <Banner></Banner>
            <Users></Users>
            <OurImpact></OurImpact>
            <Videos></Videos>
            <Testimonial></Testimonial>
            <ClientResults></ClientResults>
		</div>
	);
};

export default Home;
