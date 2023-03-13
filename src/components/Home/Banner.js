import React from "react";
import Carousel from "framer-motion-carousel";
import "./Banner.css";
import banner1 from "./../../assets/banner1.png";
import banner2 from "./../../assets/banner2.png";
import banner3 from "./../../assets/banner3.png";
import banner4 from "./../../assets/banner4.png";

const Banner = () => {
	return (
		<div>
			<Carousel showDots={false} className="carousel">
				<img className="img" src={banner1} alt="banner1" />
				<img className="img" src={banner2} alt="banner2" />
				<img className="img" src={banner3} alt="banner3" />
				<img className="img" src={banner4} alt="banner4" />
			</Carousel>
		</div>
	);
};

export default Banner;
