import React from "react";
import "./OurCreation.css";
// import video from "./../../assets/video.mp4";
import playVideoImg from "./../../assets/videoplayimg.jpg";
import TextUnderline from "./TextUnderline/TextUnderline";

const OurCreation = () => {
	return (
		<div className="videoSection">
			<div className="video_heading">
				<h1>OUR CREATION</h1>
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
