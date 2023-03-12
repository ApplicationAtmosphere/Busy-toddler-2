import React, { useState } from "react";
import "./ContactUs.css";
import svg from "./../../assets/icons8-done-64.png";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [morning, setMorning] = useState(false);
	const [afternoon, setAfternoon] = useState(false);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};

	const handleDateChange = (event) => {
		setDate(event.target.value);
	};

	const handleMorningChange = (event) => {
		setMorning(event.target.checked);
	};

	const handleAfternoonChange = (event) => {
		setAfternoon(event.target.checked);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Send form data to backend or perform some other action
		console.log({
			name,
			email,
			phone,
			date,
			morning,
			afternoon,
		});
	};

	const [isActive, setIsActive] = useState(false);

	function active() {
		setIsActive(!isActive);
	}
	console.log(active);

	return (
		<div className="main">
			<h1 className="contact_heading">Request a Call</h1>
			<form onSubmit={handleSubmit}>
				<label className="name">
					Name
					<input type="text" value={name} onChange={handleNameChange} />
				</label>
				<br />
				<span>
					<label>
						Email Address
						<input type="email" value={email} onChange={handleEmailChange} />
					</label>

					<label>
						Phone Number
						<input type="tel" value={phone} onChange={handlePhoneChange} />
					</label>
				</span>
				<br />
				<div className="appointment">
					<h1>Appointment request</h1>
					<div>
						<label className="date">
							Date
							<input type="date" value={date} onChange={handleDateChange} />
						</label>
						<br />
						<div className="checkbox">
							<label>
								<input
									type="checkbox"
									checked={morning}
									onChange={handleMorningChange}
								/>
								Morning
							</label>

							<br />

							<label>
								<input
									type="checkbox"
									checked={afternoon}
									onChange={handleAfternoonChange}
								/>
								Afternoon
							</label>
						</div>
					</div>
				</div>
				<br />
				<div className="wrapper">
					<button
						id="svg"
						// className={isActive ? "is_active" : ""}
						className="call_btn"
						onClick={active}>
						<span>Request a Call</span>
						{/* <img src={svg} alt="" /> */}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactUs;
