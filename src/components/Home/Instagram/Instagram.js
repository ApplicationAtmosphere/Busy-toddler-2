import React from "react";
import "./Instagram.css";
import p1 from "./../../../assets/product1.jpg";
import p2 from "./../../../assets/product2.jpg";
import p3 from "./../../../assets/product3.JPG";
import p4 from "./../../../assets/product1.jpg";
import p5 from "./../../../assets/product2.jpg";
import p6 from "./../../../assets/product3.JPG";
import v1 from "../../../assets/insta video/v1.mp4";
import v2 from "../../../assets/insta video/v2.mp4";
import v3 from "../../../assets/insta video/v3.mp4";
// import TextUnderline from "../TextUnderline/TextUnderline";
import insta from "../../../assets/icons8-instagram-48.png";

const Instagram = () => {
	return (
		<div className="instagram_section">
			<div className="instagram_heading">
				<h2>
					GALLERY <img src={insta} alt="insta" />
					{/* <TextUnderline /> */}
				</h2>
				<div className="instagram_heading_underline"> - </div>
			</div>
			<div className="instagram_images">
				<div className="image_div">
					<a href="https://www.instagram.com/p/CqE99XMpNfn/">
						{/* <img src={p1} alt="" /> */}
						<video controls src={v1}></video>
					</a>
				</div>
				<div className="image_div">
					<a href="https://www.instagram.com/reel/CpW5rJTgLsu/?utm_source=ig_web_copy_link">
						{/* <img src={p2} alt="" /> */}
						<video controls src={v2}></video>
					</a>
				</div>
				<div className="image_div">
					<a href="https://www.instagram.com/reel/Chy-7pQgkAh/?igshid=YmMyMTA2M2Y=">
						{/* <img src={p3} alt="" /> */}
						<video controls src={v3}></video>
					</a>
				</div>
				{/* <div className="image_div">
					<a href="https://www.instagram.com/p/CpC76mZAd0B/" target={"_blank"}>
						<img src={p4} alt="" />
					</a>
				</div>
				<div className="image_div">
					<a href="https://www.instagram.com/p/Co88EhugDIX/" target={"_blank"}>
						<img src={p5} alt="" />
					</a>
				</div>
				<div className="image_div">
					<a href="https://www.instagram.com/p/CoHi1lZgJXT/" target={"_blank"}>
						<img src={p6} alt="" />
					</a>
				</div> */}
			</div>
		</div>
	);
};

export default Instagram;
