import React from "react";
import "./Service.css";
import icon1 from "./../../assets/icon1.png";
import icon2 from "./../../assets/icon2.png";
import icon3 from "./../../assets/icon3.png";
import icon4 from "./../../assets/icon4.png";
import icon5 from "./../../assets/icon5.png";

const Service = () => {
	return (
		<div className="service">
			<div className="service1">
				<img src={icon1} alt="icon1" />
				<p>PLAY AREA AT YOUR LOCATION</p>
			</div>
			<div className="service1">
				<img src={icon2} alt="icon2" />
				<p>CAREFULLY DESIGNED & CURATED</p>
			</div>
			<div className="service1">
				<img src={icon3} alt="icon3" />
				<p>GREAT FOR CHILD DEVELOPMENT</p>
			</div>
			<div className="service1">
				<img src={icon4} alt="icon4" />
				<p>CHILDREN’S SAFETY IS OUR PRIORITY</p>
			</div>
			<div className="service1">
				<img src={icon5} alt="icon5" />
				<p>ONE STOP SHOP FOR PARTY PLANNING</p>
			</div>
		</div>
	);
};

export default Service;
