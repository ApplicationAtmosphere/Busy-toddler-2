import React from "react";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import Service from "./Service";
import ContactUs from "./ContactUs";
import OurCreation from "./OurCreation";
import OurPhilosophy from "./Our Philosophy/OurPhilosophy";

const Home = () => {
	return (
		<div>
			<Banner />
			<Service />
			<ProductSlider />
			<ContactUs />
			<OurPhilosophy />
			<OurCreation />
		</div>
	);
};

export default Home;
