import React from "react";
import Banner from "./Banner";
// import ProductSlider from "./ProductSlider";
import Service from "./Service";
import ContactUs from "./ContactUs";

const Home = () => {
	return (
		<div>
			<Banner />
			<Service />
			{/* <ProductSlider /> */}
			<ContactUs />
		</div>
	);
};

export default Home;
