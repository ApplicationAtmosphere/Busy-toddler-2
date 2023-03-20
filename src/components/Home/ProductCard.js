import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	return (
		<>
			<Card style={{ width: "inherit" }}>
				<Card>
					<div className="product_card_heading">
						<p>RAINBOW TODDLER’S PLAY AREA 1</p>
					</div>
				</Card>
				<Card.Img variant="top" src={props.imgSrc} />
				<Card>
					<div className="product-actions">
						<p>$3000</p>
						<Link to="/booknow">
							<button className="slider_btn">Book Now</button>
						</Link>
					</div>
				</Card>
			</Card>
		</>
	);
};

export default ProductCard;
