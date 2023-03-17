import React from "react";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import Service from "./Service";
import OurCreation from "./OurCreation";
import OurPhilosophy from "./Our Philosophy/OurPhilosophy";
import Appointment from "./Appointment/Appointment";

const Home = () => {
	return (
		<div>
			<Banner />
			<Service />
			<ProductSlider />
			<Appointment />
			<OurPhilosophy />
			<OurCreation />
		</div>
	);
};

export default Home;
