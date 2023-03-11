import React, { useState } from "react";
import "./ContactUs.css";

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

	return (
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
			<br />
			<button type="submit">Request a call</button>
		</form>
	);
};

export default ContactUs;
