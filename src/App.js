import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/Home/ContactUs";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Footer from "./components/Footer/Footer3";

// import TextUnderline from "./components/Home/TextUnderline/TextUnderline";
// import AllProduct from "./components/AllProducts/AllProduct";

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar2 />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/booknow" element={<ContactUs />} />
					{/* <Route path="/text" element={<TextUnderline />} /> */}
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
