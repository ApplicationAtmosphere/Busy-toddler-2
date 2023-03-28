import React from "react";
import "./Footer2.css";
import logoImg from "././../../assets/FINALSYMBOL.png";
import facebook from "./../../assets/icons8-facebook-48.png";
import instagram from "./../../assets/icons8-instagram-48.png";
import whatsapp from "./../../assets/whatsappIcon.png";

const Footer2 = () => {
	return (
		<div className="footer">
			<div className="logoImg">
				<img className="logoImg" src={logoImg} alt="logoImg" />
			</div>
			<div className="footer_middlepart">
				<h4>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
					dolores quisquam asperiores ipsam! Quis, inventore. Lorem ipsum dolor
					sit amet consectetur.
				</h4>
				<div className="socialMediaLogos">
					<img src={facebook} alt="facebook" />
					<img src={instagram} alt="instagram" />
					<img src={whatsapp} alt="whatsapp" />
				</div>
				<p>@THEBUSYTODDLERSCLUB</p>
			</div>

			<div className="contact_us_btn">
				<p>
					<h2>It’s never</h2>
					too late
					<br />
					to plan!
				</p>
				<button>Contact Us</button>
			</div>
		</div>
	);
};

export default Footer2;
