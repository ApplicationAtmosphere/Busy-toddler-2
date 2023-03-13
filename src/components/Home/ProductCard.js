import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	return (
		<>
			<Card style={{ width: "inherit" }}>
				<Card.Img variant="top" src={props.imgSrc} />
				<Card.Body>
					<div className="product-actions">
						<p>$3000</p>
						<Link to="/cart">
							<button className="slider_btn">Rent Now</button>
						</Link>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default ProductCard;
