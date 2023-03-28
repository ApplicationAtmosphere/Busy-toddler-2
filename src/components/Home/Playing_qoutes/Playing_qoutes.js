import React from "react";
import "./Playing_qoutes.css";
import icon1 from "./../../../assets/1.png";
import icon2 from "./../../../assets/2.png";
import icon3 from "./../../../assets/3.png";
import icon4 from "./../../../assets/4.png";
import icon5 from "./../../../assets/5.png";

const Playing_qoutes = () => {
	return (
		<div className="playing_quotes">
			<div className="playing_quotes1">
				<img src={icon1} alt="icon1" />
				<p>PLAY AREA AT YOUR LOCATION</p>
			</div>
			<div className="playing_quotes1">
				<img src={icon2} alt="icon2" />
				<p>CAREFULLY DESIGNED & CURATED</p>
			</div>
			<div className="playing_quotes1">
				<img src={icon3} alt="icon3" />
				<p>GREAT FOR CHILD DEVELOPMENT</p>
			</div>
			<div className="playing_quotes1">
				<img src={icon4} alt="icon4" />
				<p>CHILDREN’S SAFETY IS OUR PRIORITY</p>
			</div>
			<div className="icon5">
				<img src={icon5} alt="icon5" />
				<p>ONE STOP SHOP FOR PARTY PLANNING</p>
			</div>
		</div>
	);
};

export default Playing_qoutes;
