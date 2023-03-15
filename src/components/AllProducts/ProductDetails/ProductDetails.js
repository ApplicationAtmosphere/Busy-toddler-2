import React from "react";
import { useStateValue } from "../../../Context/StateProvider";
import ProductDetailsDesc from "./ProductDetailsDesc/ProductDetailsDesc";

function ProductDetails() {
	const [{ product }] = useStateValue();
	console.log(product);

	return (
		<div className="checkout">
			<div className="checkout_left">
				{product?.length === 0 ? (
					<div>
						<h1>Your shopping cart is empty</h1>
						<p>
							You have no items in the cart. To buy just click on 'Add to cart'
							next to the item.
						</p>
					</div>
				) : (
					<div>
						{product?.map(({ id, title, image, price, rating }) => (
							<ProductDetailsDesc
								key={id}
								id={id}
								title={title}
								image={image}
								price={price}
								rating={rating}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default ProductDetails;
