import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	return (
		<>
			<Card style={{ width: "inherit" }}>
				<Card.Img variant="top" src={props.imgSrc} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					{/* <Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text> */}
					<div className="product-actions">
						<Link to="/productDetailsDesc">
							<Button variant="primary">Buy Now</Button>
						</Link>
						<Link to="/cart">
							<Button variant="secondary">Add to cart</Button>
						</Link>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default ProductCard;
