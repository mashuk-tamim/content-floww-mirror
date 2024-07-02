import Banner from "./components/Banner";
import Calender from "./components/Calender";
import ClientResults from "./ClientResults/ClientResults";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
// import Example from "./HorizontalCarousal";
import MarqueeSection from "./components/Marquee";
import Navbar from "./components/Navbar";
import OurImpact from "./components/OurImpact";
import Steps from "./components/Steps";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";
import Users from "./components/Users";
import Videos from "./components/Videos";
import WhyChooseUs from "./components/WhyChooseUs";
import Workflow from "./components/Workflow";

const Home = () => {
	return (
		<div className="max-w-7xl mx-auto">
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
