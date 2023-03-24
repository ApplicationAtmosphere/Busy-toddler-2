import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import "./navbar2.css";

function Navbar2() {
	return (
		<Navbar
			className=""
			expand="md"
			style={{
				backgroundColor: "#fff",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<Container>
				<Navbar.Brand href="#home">
					<img className="lg_img" src={logo} alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink className="aTag" to="/">
							HOME
						</NavLink>
						<NavLink className="aTag" to="/">
							WHAT WE DO{" "}
						</NavLink>
						<img className="sm_img" src={logo} alt="logo" />
						<NavLink className="aTag" to="/services">
							OUR SERVICES{" "}
						</NavLink>
						<NavLink className="aTag" to="/appointment">
							BOOK NOW{" "}
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navbar2;
