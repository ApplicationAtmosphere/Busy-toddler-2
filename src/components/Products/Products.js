import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
// import axios from "axios";
import { allProducts } from "../../data/products.data";

const Products = () => {
	const [data, setData] = useState([]);
	// const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
	let componentMounted = true;

	// useEffect(() => {
	// 	let componentMounted = true;

	// 	const getProducts = async () => {
	// 		setLoading(true);
	// 		try {
	// 			const response = await axios.get("https://fakestoreapi.com/products");
	// 			if (componentMounted) {
	// 				setData(response.data);
	// 				setFilter(response.data);
	// 				setLoading(false);
	// 				console.log(filter);
	// 			}
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	getProducts();

	// 	return () => {
	// 		componentMounted = false;
	// 	};
	// }, []);

	const Loading = () => {
		return (
			<>
				<div className="col-md-3">
					<Skeleton height={350} />
				</div>
				<div className="col-md-3">
					<Skeleton height={350} />
				</div>
				<div className="col-md-3">
					<Skeleton height={350} />
				</div>
				<div className="col-md-3">
					<Skeleton height={350} />
				</div>
			</>
		);
	};

	// const filterProduct = (cat) => {
	// 	const updatedList = data.filter((x) => x.category === cat);
	// 	setFilter(updatedList);
	// };

	const ShowProducts = () => {
		return (
			<>
				{/* <div className="buttons d-flex flex-wrap justify-content-center mb-5 pb-5">
					<button
						className="btn btn-outline-dark mb-2 me-2"
						onClick={() => setFilter(data)}>
						All
					</button>
					<button
						className="btn btn-outline-dark mb-2 me-2"
						onClick={() => filterProduct("men's clothing")}>
						Men's Clothing
					</button>
					<button
						className="btn btn-outline-dark mb-2 me-2"
						onClick={() => filterProduct("women's clothing")}>
						Women's Clothing
					</button>
					<button
						className="btn btn-outline-dark mb-2 me-2"
						onClick={() => filterProduct("jewelery")}>
						Jewelery
					</button>
					<button
						className="btn btn-outline-dark mb-2 me-2"
						onClick={() => filterProduct("electronics")}>
						Electronic
					</button>
				</div> */}
				{allProducts.products.map((product) => {
					return (
						<>
							<div className="col-md-5 mb-3" key={product.id}>
								<div className="card  text-center p-4">
									<NavLink to={`/products/${product.id}`}>
										<img
											style={{ objectFit: "cover" }}
											src={product.image}
											className="card-img-top"
											alt={product.title}
											height="550px"
											width="900px"
										/>
									</NavLink>
									<div className="card-body">
										<h5 className="card-title mb-2">
											{/* {product.title.substring(0, 12)}... */}
											{product.title}
										</h5>
										{/* <p className="card-text lead fw-bold">${product.price}</p> */}
										<NavLink
											to={`/products/${product.id}`}
											className="btn btn-outline-dark ">
											Book Now
										</NavLink>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</>
		);
	};
	return (
		<div>
			<div className="container my-5 py-5">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center">Our Services</h1>
						<hr />
					</div>
				</div>
				<div className="row justify-content-center">
					{loading ? <Loading /> : <ShowProducts />}
				</div>
			</div>
		</div>
	);
};

export default Products;
