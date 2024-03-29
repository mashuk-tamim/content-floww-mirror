import Banner from "./Banner";
import Calender from "./Calender";
import ClientResults from "./ClientResults/ClientResults";
import FAQ from "./FAQ";
import Footer from "./Footer";
// import Example from "./HorizontalCarousal";
import MarqueeSection from "./Marquee";
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
		<div className="">
			<Navbar></Navbar>
            <Banner></Banner>
            <Users></Users>
            <OurImpact></OurImpact>
            <Videos></Videos>
            <Testimonial></Testimonial>
            <ClientResults></ClientResults>
            <Steps></Steps>
            <Workflow></Workflow>
            {/* <Example></Example> */}
            <WhyChooseUs></WhyChooseUs>
            <Subscribe></Subscribe>
            <FAQ></FAQ>
            <MarqueeSection></MarqueeSection>
            <Calender></Calender>
            <Footer></Footer>
		</div>
	);
};

export default Home;
