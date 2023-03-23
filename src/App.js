import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar2 from "./components/Navbar/Navbar2";
import Footer from "./components/Footer/Footer3";
import Products1 from "./components/Products/Products1";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import Appointment from "./components/Home/Appointment/Appointment";

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar2 />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Products1 />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/appointment" element={<Appointment />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
