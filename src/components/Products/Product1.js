import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Button, Badge } from "react-bootstrap";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showCart, setShowCart] = useState(true);
	const [cartQuantity, setCartQuantity] = useState(0);

	const handleAddToCart = () => {
		setCartQuantity(cartQuantity + 1);
		setShowCart(true);
	};

	const handleHideCart = () => {
		setShowCart(false);
	};

	const dispatch = useDispatch();
	const addProduct = (product) => {
		dispatch(addCart(product));
	};

	useEffect(() => {
		const getProduct = async () => {
			setLoading(true);
			const response = await fetch(`https://fakestoreapi.com/products/${id}`);
			setProduct(await response.json());
			setLoading(false);
		};
		getProduct();
	}, []);

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
				<div className="col-md-6">
					<img
						src={product.image}
						alt={product.title}
						height="400px"
						width="400px"
					/>
				</div>
				<div className="col-md-6">
					<h4 className="text-uppercase text-black-50">{product.category}</h4>
					<h1 className="display-5">{product.title}</h1>
					<p className="lead fw-bolder">
						Rating {product.rating && product.rating.rate}
						<i className="fa fa-star"></i>
					</p>
					<h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
					<p className="lead">{product.description}</p>
					<button
						className="btn btn-outline-dark px-4 py-2"
						onClick={handleAddToCart}>
						Add to Cart
					</button>
					<NavLink to="/cart">
						<button
							className="btn btn-outline-dark px-4 py-2"
							onClick={() => addProduct(product)}>
							Go to Cart
						</button>
					</NavLink>
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
				</div>
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
