import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../../redux/action";

const Cart = () => {
	const state = useSelector((state) => state.handleCart);
	const dispatch = useDispatch();

	const handleAdd = (item) => {
		dispatch(addCart(item));
	};
	const handleDel = (item) => {
		dispatch(delCart(item));
	};

	const emptyCart = () => {
		return (
			<div className="px-4 my-5 bg-light rounded-3 py-5">
				<div className="container py-4">
					<div className="row">
						<h3>Your Cart is Empty</h3>
					</div>
				</div>
			</div>
		);
	};
	const cartItems = (product) => {
		return (
			<>
				<div className=" my-5 bg-light rounded-3 ">
					<div className="container ">
						<div className="row justify-content-center align-items-center">
							<div className="col-md-4 ">
								<img
									src={product.image}
									alt={product.title}
									height="300px"
									width="300px"
								/>
							</div>
							<div className=" col-md-3">
								<h3>{product.title}</h3>
								<p className="lead fw-bold">
									{product.qty} X ₹{product.price} = $
									{product.qty * product.price}
								</p>
								<button
									style={{ backgroundColor: "#ffc300" }}
									className="btn me-4"
									onClick={() => handleDel(product)}>
									<i className="fa fa-minus"> Remove </i>
								</button>
								{/* <button
									className="btn btn-outline-dark"
									onClick={() => handleAdd(product)}>
									<i className="fa fa-plus"> + </i>
								</button> */}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};
	const buttons = () => {
		return (
			<>
				<div className="container">
					<div className="row">
						<NavLink
							to="/checkout"
							style={{ backgroundColor: "#ffc300" }}
							className="btn mb-5 w-25 mx-auto">
							Proceed to Checkout
						</NavLink>
					</div>
				</div>
			</>
		);
	};

	return (
		<div>
			{state.length === 0 && emptyCart()}
			{state.length !== 0 && state.map(cartItems)}
			{state.length !== 0 && buttons()}
		</div>
	);
};

export default Cart;
