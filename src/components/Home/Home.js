import React from "react";
import Banner from "./Banner/Banner";
import ProductSlider from "./Product_slider/ProductSlider";
import Playing_qoutes from "./Playing_qoutes/Playing_qoutes";
import OurCreation from "./Our_Creation/OurCreation";
import OurPhilosophy from "./Our Philosophy/OurPhilosophy";
import Appointment from "./Appointment/Appointment";
import Instagram from "./Instagram/Instagram";

const Home = () => {
	return (
		<div>
			<Banner />
			<Playing_qoutes />
			<ProductSlider />
			<Appointment />
			<OurPhilosophy />
			<OurCreation />
			<Instagram />
		</div>
	);
};

export default Home;
