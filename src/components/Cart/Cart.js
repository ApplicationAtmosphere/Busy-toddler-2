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
				<div className="px-4 my-5  rounded-3 py-5">
					<div className="container py-4">
						<div className="d-flex flex-column align-items-center justify-content-center">
							<div className="col-md-4 ">
								<img
									src={product.image}
									alt={product.title}
									height="350px"
									width="320px"
								/>
							</div>
							<div className=" col-md-4 mt-3">
								<h3>{product.title}</h3>
								<p className="lead fw-bold">
									{product.qty} X ₹{product.price} = $
									{product.qty * product.price}
								</p>
								<div className=" mx-auto">
									<button
										style={{ backgroundColor: "#ffc300" }}
										className="btn me-4 "
										onClick={() => handleDel(product)}>
										<i className="fa fa-minus"> Remove </i>
									</button>
								</div>
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
					<div className="d-flex flex-column align-items-center justify-content-center">
						<NavLink
							to="/checkout"
							className="mb-5 mx-auto "
							style={{ width: "33%" }}>
							<button
								style={{ backgroundColor: "#ffc300" }}
								className="btn me-4">
								<i className="fa fa-minus">Checkout </i>
							</button>
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
