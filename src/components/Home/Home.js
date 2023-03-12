import React from "react";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import Service from "./Service";
import ContactUs from "./ContactUs";
import Video from "./Video";
import Instagram from "./Instagram";

const Home = () => {
	return (
		<div>
			<Banner />
			<Service />
			<ProductSlider />
			<ContactUs />
			<Video />
			<Instagram />
		</div>
	);
};

export default Home;
