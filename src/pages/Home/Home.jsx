import Banner from "./Banner";
import Calender from "./Calender";
// import ClientResults from "./ClientResults";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Navbar from "./Navbar";
import OurImpact from "./OurImpact";
import Steps from "./Steps";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";
import Users from "./Users";
import Videos from "./Videos";
import WhyChooseUs from "./WhyChooseUs";
import Workflow from "./Workflow";

const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
            <Banner></Banner>
            <Users></Users>
            <OurImpact></OurImpact>
            <Videos></Videos>
            <Testimonial></Testimonial>
            {/* <ClientResults></ClientResults> */}
            <Steps></Steps>
            <Workflow></Workflow>
            <WhyChooseUs></WhyChooseUs>
            <Subscribe></Subscribe>
            <FAQ></FAQ>
            <Calender></Calender>
            <Footer></Footer>
		</div>
	);
};

export default Home;
