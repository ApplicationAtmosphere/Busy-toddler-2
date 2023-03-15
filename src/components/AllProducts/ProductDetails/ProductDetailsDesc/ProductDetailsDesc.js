import React from "react";
import { useStateValue } from "../../../../Context/StateProvider";
import "./ProductDetailsDesc.css";
import { Link } from "react-router-dom";

function ProductDetailsDesc({ id, title, image, price, rating }) {
	const [_, dispatch] = useStateValue();

	const addToCart = () => {
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				image: image,
			},
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_img" src={image} />
			<div>
				<p>{title}</p>

				<div className="checkoutProduct_rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<p>⭐</p>
						))}
				</div>
				<div>
					<p>Price: ${price}</p>
					<p>Description</p>
					<h2>Specifications:</h2>
					<ul>
						<li>Color: </li>
						<li>Material: </li>
						<li>Dimensions: </li>
						<li>Weight: </li>
					</ul>
				</div>
				<Link to="cart">
					<button onClick={addToCart}>Add to cart</button>
				</Link>
			</div>
		</div>
	);
}

export default ProductDetailsDesc;
