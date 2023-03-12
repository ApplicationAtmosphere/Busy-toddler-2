import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [telephone, setTelephone] = useState("");
	const [comment, setComment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// do something with the form data
		console.log(name, email, telephone, comment);
		// clear the form
		setName("");
		setEmail("");
		setTelephone("");
		setComment("");
	};

	return (
		<MDBFooter
			bgColor="warning"
			className="text-center text-lg-start text-muted">
			<section className="">
				<MDBContainer className="text-center text-md-start mt-5">
					<MDBCol md="3" lg="4" xl="3" className=" mb-4">
						<h4 className="text-uppercase  fw-bold mb-4">
							<MDBIcon icon="gem" className="me-3" />
							Contact Us
						</h4>
						<p>
							Here you can use rows and columns to organize your footer content.
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
					</MDBCol>
					<MDBRow className="mt-3">
						<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Our OfFice</h6>
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
						</MDBCol>

						<MDBCol md="4" lg="3" xl="4" className="mx-auto mb-4">
							<h6 className="text-center text-uppercase fw-bold mb-4">
								Say hello
							</h6>
							{/* <p>
								<a href="#!" className="text-reset">
									Angular
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									React
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Vue
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Laravel
								</a>
							</p> */}

							<Container className="bg-warning">
								<Row>
									<Col>
										<Form onSubmit={handleSubmit}>
											<Form.Group className="mb-2" controlId="formName">
												<Form.Control
													type="text"
													placeholder="Enter your name"
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</Form.Group>

											<Form.Group className="mb-2 " controlId="formEmail">
												<Form.Control
													type="email"
													placeholder="Enter email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</Form.Group>

											<Form.Group className="mb-2" controlId="formTelephone">
												<Form.Control
													type="text"
													placeholder="Enter your telephone number"
													value={telephone}
													onChange={(e) => setTelephone(e.target.value)}
												/>
											</Form.Group>

											<Form.Group className="mb-2" controlId="formComment">
												<Form.Control
													as="textarea"
													rows={3}
													placeholder="Enter your comment"
													value={comment}
													onChange={(e) => setComment(e.target.value)}
												/>
											</Form.Group>

											<Button
												className="mb-2 btn-sm "
												variant="primary"
												type="submit">
												Submit
											</Button>
										</Form>
									</Col>
								</Row>
							</Container>
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 ">
							<h6 className="text-uppercase fw-bold mb-4">Keep Connected</h6>

							<div className="">
								<a href="" className="me-4 text-reset">
									<MDBIcon fab icon="facebook-f" />
								</a>
								<a href="" className="me-4 text-reset">
									<MDBIcon fab icon="twitter" />
								</a>

								<a href="" className="me-4 text-reset">
									<MDBIcon fab icon="instagram" />
								</a>
							</div>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>

			<div
				className="text-center p-4"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
				© 2023 Copyright:
				<a className="text-reset fw-bold" href="https://mdbootstrap.com/">
					busytoddlerclub.com
				</a>
			</div>
		</MDBFooter>
	);
}
