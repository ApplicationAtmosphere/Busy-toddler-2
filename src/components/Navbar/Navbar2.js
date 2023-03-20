import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../../assets/logo.png";
import "./navbar2.css";

function Navbar2() {
	return (
		<Navbar
			className=""
			// bg="light"
			expand="md"
			style={{
				backgroundColor: "#fff",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">WHAT WE DO </Nav.Link>
						<img src={logo} alt="logo" />
						<Nav.Link href="#home">OUR SERVICES </Nav.Link>
						<Nav.Link href="#link">BOOK NOW </Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navbar2;
