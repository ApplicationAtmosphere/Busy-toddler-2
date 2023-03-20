import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";
import logo from "./../../assets/logo2.jpeg";
import fb from "./../../assets/icons8-facebook-48.png";
import insta from "./../../assets/icons8-instagram-48.png";
import { Link } from "react-router-dom";

function Footer3() {
	return (
		<MDBFooter
			style={{
				paddingTop: "20px",
				backgroundColor: "black",
				color: "white",
			}}
			// bgColor="light"
			className="  flex-direction-column text-center text-lg-start text-muted ">
			{/* <section className="justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="facebook-f" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="twitter" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="google" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="instagram" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="linkedin" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="github" />
					</Link>
				</div>
			</section> */}

			<section className="text-light">
				<MDBContainer className="text-center text-md-start mt-5">
					<MDBRow className="mt-3">
						<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<img
									style={{
										width: "100px",
										marginBottom: "10px",
									}}
									src={logo}
									alt="logo"
								/>
							</div>
							<p>
								Here you can use rows and columns to organize your footer
								content. Lorem ipsum dolor sit amet, consectetur adipisicing
								elit.
							</p>
						</MDBCol>

						<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 text-center">
							<h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
							<p>
								<Link to="#!" className="text-reset">
									Angular
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									React
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									Vue
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									Laravel
								</Link>
							</p>
						</MDBCol>
						<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 text-center">
							<h6 className="text-uppercase fw-bold mb-4">Categories</h6>
							<p>
								<Link to="#!" className="text-reset">
									Angular
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									React
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									Vue
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									Laravel
								</Link>
							</p>
						</MDBCol>

						<MDBCol
							md="2"
							lg="2"
							xl="2"
							className="mx-auto mb-4 mb-md-0 text-center">
							<h6 className="text-uppercase fw-bold mb-4">Support</h6>
							<p>
								<Link to="#!" className="text-reset">
									Pricing
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									Settings
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									Orders
								</Link>
							</p>
							<p>
								<Link to="#!" className="text-reset">
									Help
								</Link>
							</p>
						</MDBCol>

						<MDBCol
							md="2"
							lg="2"
							xl="2"
							className="mx-auto mb-md-0 mb-4 text-center">
							<h6 className="text-uppercase mb-4 fw-bold ">Contact</h6>
							<p>
								<MDBIcon icon="home" className="me-2" />
								New York, NY 10012, US
							</p>
							<p>
								<MDBIcon icon="envelope" className="me-3" />
								info@example.com
							</p>
							<p>
								<MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
							</p>
							<p>
								<MDBIcon icon="print" className="me-3" /> + 01 234 567 89
							</p>
							<div>
								<img src={fb} alt="fb" />
								<img src={insta} alt="insta" />
							</div>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>

			<div
				className="text-center p-4 text-light"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
				© 2023 Copyright:
				<a className="text-reset fw-bold" href="https://mdbootstrap.com/">
					busytoddlerclub.com
				</a>
			</div>
		</MDBFooter>
	);
}

export default Footer3;
