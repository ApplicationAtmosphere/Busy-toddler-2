import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import banner1 from "./../../../assets/banner1.png";
import banner2 from "./../../../assets/banner2.png";
import banner3 from "./../../../assets/banner3.png";
import banner4 from "./../../../assets/banner4.png";

const Banner = () => {
	return (
		<>
			<Carousel indicators={false} className="main_carousel">
				<Carousel.Item interval={1000}>
					<img className="d-block w-100 h-70" src={banner1} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className="d-block w-100 h-70"
						src={banner2}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 h-70" src={banner3} alt="Third slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 h-70" src={banner4} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Banner;
