import React, { useState } from "react";
import { Button, Badge } from "react-bootstrap";

function Cart_Popup() {
	const [showCart, setShowCart] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(0);

	const handleAddToCart = () => {
		setCartQuantity(cartQuantity + 1);
		setShowCart(true);
	};

	const handleHideCart = () => {
		setShowCart(false);
	};

	return (
		<>
			<Button variant="primary" onClick={handleAddToCart}>
				Add to Cart
			</Button>
			{showCart && (
				<div
					style={{
						position: "fixed",
						bottom: "1rem",
						right: "1rem",
						backgroundColor: "white",
						border: "1px solid black",
						padding: "1rem",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<h4>Cart</h4>
						<Button variant="secondary" onClick={handleHideCart}>
							X
						</Button>
					</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<p>Quantity:</p>
						<Badge variant="secondary">{cartQuantity}</Badge>
					</div>
				</div>
			)}
		</>
	);
}

export default Cart_Popup;
