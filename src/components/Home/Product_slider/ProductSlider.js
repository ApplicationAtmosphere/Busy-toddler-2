import React, { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { allProducts } from "../../../data/products.data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";

import product1 from "./../../../assets/product1.jpg";
import product2 from "./../../../assets/product2.jpg";
import product3 from "./../../../assets/product3.JPG";
import product4 from "./../../../assets/product4.JPG";
import TextUnderline from "../TextUnderline/TextUnderline";
import { useParams } from "react-router-dom";

const ProductSlider = () => {
	const [slides, setSlides] = useState([
		{
			img: product1,
		},
		{
			img: product2,
		},
		{
			img: product3,
		},
		{
			img: product4,
		},
		{
			img: product4,
		},
		{
			img: product4,
		},
		{
			img: product4,
		},
	]);
	const { id } = useParams();
	const item = allProducts.products[id - 1];
	console.log(allProducts);

	const [product, setProduct] = useState(item);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<div className="slider_main">
			<div className="product_heading">
				<h2>OUR PRODUCTS</h2>
				<TextUnderline />
			</div>

			<Slider {...settings}>
				{allProducts.products.map((slide, index) => (
					<div key={index}>
						<ProductCard imgSrc={slide.image} id={slide.id} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ProductSlider;
