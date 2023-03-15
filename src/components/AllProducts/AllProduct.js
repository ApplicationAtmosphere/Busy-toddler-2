import React, { useEffect, useState } from "react";
import "./AllProduct.css";
import Product from "./Product/Product";

function AllProduct(props) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	if (loading) {
		return <h1>Loading....</h1>;
	}
	console.log(products);

	return (
		<div className="home">
			<div className="home_rows">
				{products
					?.filter(
						(product) => product.title
						// .toLowerCase()
						// .includes(props.searchProduct.toLowerCase())
					)
					.map((product) => (
						<div key={product.id} className="home_row">
							<Product
								id={product.id}
								title={product.title}
								price={product.price}
								rating={Math.round(product.rating.rate)}
								image={product.image}
							/>
						</div>
					))}
			</div>
		</div>
	);
}

export default AllProduct;
