import React, { useState, useEffect } from "react";
import "./Products.css";

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch("https://fakestoreapi.com/products");
			setData(await response.clone().json());
			setFilter(await response.json());
			setLoading(false);
		};

		getProducts();
	}, []);

	const filterProduct = (cat) => {
		const updatedList = data.filter((x) => x.category === cat);
		setFilter(updatedList);
	};

	const ShowProducts = () => {
		return (
			<>
				<div className="buttons-container">
					<button className="button" onClick={() => setFilter(data)}>
						All
					</button>
					<button
						className="button"
						onClick={() => filterProduct("men's clothing")}>
						Men's Clothing
					</button>
					<button
						className="button"
						onClick={() => filterProduct("women's clothing")}>
						Women's Clothing
					</button>
					<button className="button" onClick={() => filterProduct("jewelery")}>
						Jewelery
					</button>
					<button
						className="button"
						onClick={() => filterProduct("electronics")}>
						Electronic
					</button>
				</div>
				<div className="products-container">
					{filter.map((product) => {
						return (
							<div className="product" key={product.id}>
								<img
									src={product.image}
									className="product-image"
									alt={product.title}
								/>
								<div className="product-details">
									<h5 className="product-title">
										{product.title.substring(0, 12)}...
									</h5>
									<p className="product-price">${product.price}</p>
									<button className="buy-now-button">Buy Now</button>
								</div>
							</div>
						);
					})}
				</div>
			</>
		);
	};

	return (
		<div className="container">
			<h1 className="title">Latest Products</h1>
			{loading ? <div className="loading">Loading...</div> : <ShowProducts />}
		</div>
	);
};

export default Products;
