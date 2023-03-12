import React, { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";

import product1 from "./../../assets/product1.jpg";
import product2 from "./../../assets/product2.jpg";
import product3 from "./../../assets/product3.JPG";
import product4 from "./../../assets/product4.JPG";

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
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<div className="slider_main">
			<h1 className="heading">Our Products</h1>
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<div key={index}>
						<ProductCard imgSrc={slide.img} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ProductSlider;
