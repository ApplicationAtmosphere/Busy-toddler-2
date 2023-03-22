import React from "react";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import Service from "./Service";
import OurCreation from "./OurCreation";
import OurPhilosophy from "./Our Philosophy/OurPhilosophy";
import Appointment from "./Appointment/Appointment";
import Instagram from "./Instagram/Instagram";

const Home = () => {
	return (
		<div>
			<Banner />
			<Service />
			<ProductSlider />
			<Appointment />
			<OurPhilosophy />
			<OurCreation />
			<Instagram />
		</div>
	);
};

export default Home;
