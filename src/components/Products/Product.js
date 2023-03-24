import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/action";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { allProducts } from "../../data/products.data";
import { Button, Badge } from "react-bootstrap";
import cart from "./../../assets/icons8-shopping-cart.gif";

const Product = () => {
	const state = useSelector((state) => state.handleCart);
	console.log(state);

	const { id } = useParams();
	const item = allProducts.products[id - 1];
	console.log(item);

	const [product, setProduct] = useState(item);
	const [loading, setLoading] = useState(false);
	const [showCart, setShowCart] = useState(false);

	const dispatch = useDispatch();
	const addProduct = (product) => {
		dispatch(addCart(product));
		setShowCart(true);
	};
	const handleHideCart = () => {
		setShowCart(false);
	};

	const Loading = () => {
		return (
			<>
				<div className="col-md-6">
					<Skeleton height={400} />
				</div>
				<div className="col-md-6" style={{ lineHeight: 2 }}>
					<Skeleton height={50} width={300} />
					<Skeleton height={75} />
					<Skeleton height={25} width={150} />
					<Skeleton height={50} />
					<Skeleton height={150} />
					<Skeleton height={50} width={100} />
					<Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
				</div>
			</>
		);
	};
	const ShowProduct = () => {
		return (
			<>
				<div className="col-md-4">
					<img
						src={product.image}
						alt={product.title}
						height="350px"
						width="300px"
					/>
				</div>
				<div className="col-md-8">
					<h1 className="display-5">{product.title}</h1>
					<p className="lead fw-bolder">
						Rating {product.rating && product.rating.rate}
						<i className="fa fa-star"></i>
					</p>
					{/* <h3 className="display-6 fw-bold my-4">₹ {product.price}</h3> */}
					<p className="lead">{product.description}</p>
					<NavLink to="/cart">
						<button
							className="btn btn-outline-dark px-4 py-2 m-2"
							// onClick={() => addProduct(product)}
						>
							Go to cart
						</button>
					</NavLink>
					<NavLink to="">
						<button
							className="btn btn-outline-dark px-4 py-2 m-2 "
							onClick={() => addProduct(product)}>
							Add to cart
						</button>
					</NavLink>
				</div>
				{showCart && (
					<div
						style={{
							position: "fixed",
							bottom: "1rem",
							right: "1rem",
							backgroundColor: "white",
							border: "1px solid black",
							padding: "1rem",
							width: "150px",
							borderRadius: "12px",
						}}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<img src={cart} alt="" />
							<Button
								style={{
									marginTop: "-10px",
									marginTop: "-78px",
									marginRight: "-24px",
									borderRadius: "50%",
									backgroundColor: "#cf0808",
									color: "black",
								}}
								variant="secondary"
								onClick={handleHideCart}>
								X
							</Button>
						</div>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<p className="mt-3">Quantity:</p>
							<h3 className="mt-3">{state.length}</h3>
						</div>
					</div>
				)}
			</>
		);
	};

	return (
		<div>
			<div className="container py-5">
				<div className="row py-4">
					{loading ? <Loading /> : <ShowProduct />}
				</div>
			</div>
		</div>
	);
};

export default Product;
