import React from "react";
import "./Video.css";
import video from "./../../assets/video.mp4";

const Video = () => {
	return (
		<div className="videoSection">
			<h1 className="video_heading">OUR PHILOSOPHY</h1>
			<video muted loop autoPlay>
				<source src={video} type="video/mp4" />
			</video>
		</div>
	);
};

export default Video;
