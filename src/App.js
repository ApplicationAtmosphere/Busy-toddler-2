import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/Home/ContactUs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/booknow" element={<ContactUs />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
