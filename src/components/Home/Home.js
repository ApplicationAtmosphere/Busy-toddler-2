import React from "react";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import Service from "./Service";
import ContactUs from "./ContactUs";
import Video from "./Video";

const Home = () => {
	return (
		<div>
			<Banner />
			<Service />
			<ProductSlider />
			<ContactUs />
			<Video />
		</div>
	);
};

export default Home;
