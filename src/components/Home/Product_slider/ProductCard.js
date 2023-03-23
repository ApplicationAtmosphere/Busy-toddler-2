import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { allProducts } from "../../../data/products.data";
import { addCart } from "../../../redux/action";

const ProductCard = (props) => {
	// const { id } = useParams();
	// const item = allProducts.products[id - 1];
	// console.log(item[0]);
	// const [product, setProduct] = useState(item);
	const dispatch = useDispatch();
	const addProduct = (id) => {
		const item = allProducts.products[id - 1];
		dispatch(addCart(item));
	};
	return (
		<>
			<Card style={{ width: "inherit" }}>
				<Card>
					<div className="product_card_heading">
						<p>RAINBOW TODDLER’S PLAY AREA 1</p>
					</div>
				</Card>
				<Link to={`/products/${props.id}`}>
					<Card.Img variant="top" src={props.imgSrc} />
				</Link>
				<Card>
					<div className="product-actions">
						{/* <p>$3000</p> */}
						<Link to="/cart">
							<button
								onClick={() => addProduct(props.id)}
								className="slider_btn">
								Book Now
							</button>
						</Link>
					</div>
				</Card>
			</Card>
		</>
	);
};

export default ProductCard;
