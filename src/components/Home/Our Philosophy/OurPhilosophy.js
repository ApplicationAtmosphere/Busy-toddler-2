import React from "react";
import "./OurPhilosophy.css";
import logoImg from "./../../../assets/logo2.jpeg";
import TextUnderline from "./../../Home/TextUnderline/TextUnderline";

const OurPhilosophy = () => {
	return (
		<div className="ourPhilosophy">
			<div className="ourPhilosophy_heading">
				<h2>OUR PHILOSOPHY</h2>
				<TextUnderline />
			</div>
			<div className="ourPhilosophy_img">
				<img src={logoImg} alt="" />
			</div>
		</div>
	);
};

export default OurPhilosophy;
