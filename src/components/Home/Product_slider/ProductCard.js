import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { allProducts } from "../../../data/products.data";
import { addCart } from "../../../redux/action";

const ProductCard = (props) => {
	const dispatch = useDispatch();
	const addProduct = (id) => {
		const item = allProducts.products[id - 1];
		dispatch(addCart(item));
	};

	const title = props.title;
	let titleCaps = title.toUpperCase();

	return (
		<>
			<Card style={{ width: "inherit" }}>
				<Card>
					<div className="product_card_heading">
						<p>{titleCaps}</p>
					</div>
				</Card>
				<NavLink to={`/products/${props.id}`}>
					<Card.Img variant="top" src={props.imgSrc} />
				</NavLink>
				<Card>
					<div className="product-actions">
						<p>₹{props.price}/- </p>
						<NavLink to="/cart">
							<button
								onClick={() => addProduct(props.id)}
								className="slider_btn">
								Book Now
							</button>
						</NavLink>
					</div>
				</Card>
			</Card>
		</>
	);
};

export default ProductCard;
