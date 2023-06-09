import React from "react";
import "./OurCreation.css";
import playVideoImg from "./../../../assets/videoplayimg.jpg";
import TextUnderline from "./../../Home/TextUnderline/TextUnderline";

const OurCreation = () => {
	return (
		<div className="videoSection">
			<div className="video_heading">
				<h2>OUR CREATION</h2>
				<TextUnderline />
			</div>
			<div className="video">
				{/* <video muted loop autoPlay>
					<source src={playVideoImg} type="video/mp4" />
				</video> */}
				<img src={playVideoImg} alt="" />
			</div>
		</div>
	);
};

export default OurCreation;
