import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { allProducts } from "../../data/products.data";
import TextUnderline from "../Home/TextUnderline/TextUnderline";

const Products = () => {
	const [loading, setLoading] = useState(false);
	let componentMounted = true;

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

	const ShowProducts = () => {
		return (
			<>
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
											height="350px"
											width="300px"
										/>
									</NavLink>
									<div className="card-body">
										<h5 className="card-title mb-2">{product.title}</h5>
										<NavLink
											style={{ backgroundColor: "#ffc300" }}
											to={`/products/${product.id}`}
											className="btn  ">
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
					<div className="d-flex flex-column align-items-center justify-content-center col-12 mb-5">
						<h1 className=" fw-bolder ">Our Services</h1>
						<TextUnderline />
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
