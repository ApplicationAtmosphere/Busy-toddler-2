import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/whatwedo">WHAT WE DO</NavLink>
			<img src={logo} alt="" />
			<NavLink to="/services">OUR SERVICES</NavLink>
			<NavLink to="/booknow">BOOK NOW</NavLink>
		</nav>
	);
};

export default Navbar;
