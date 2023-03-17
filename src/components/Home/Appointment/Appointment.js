import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Appointment.css";
import TextUnderline from "../TextUnderline/TextUnderline";

function Appointment() {
	const [selectedDate, setSelectedDate] = useState("");
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [morningChecked, setMorningChecked] = useState(false);
	const [afternoonChecked, setAfternoonChecked] = useState(false);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	// const handleDateChange = (event) => {
	// 	setSelectedDate(event.target.value);
	// };

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleMobileChange = (event) => {
		setMobile(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleMorningCheckboxChange = () => {
		setMorningChecked(!morningChecked);
	};

	const handleAfternoonCheckboxChange = () => {
		setAfternoonChecked(!afternoonChecked);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({
			selectedDate,
			name,
			mobile,
			email,
			morningChecked,
			afternoonChecked,
		});
	};

	return (
		<div className="main_appointment">
			<div className="appointment_heading">
				<h1>SPEAK ON CALL</h1>
				<TextUnderline />
			</div>
			<div className="all_items">
				<div className="calendar">
					<div className="calendar_heading">EVENT/PARTY DATE</div>
					<Calendar value={selectedDate} onChange={handleDateChange} />
				</div>

				<div className="appointment">
					<form onSubmit={handleSubmit}>
						<label className="label">
							Name:
							<input
								type="text"
								className="input"
								value={name}
								onChange={handleNameChange}
							/>
						</label>
						<label className="label">
							Mobile:
							<input
								type="tel"
								className="input"
								value={mobile}
								onChange={handleMobileChange}
							/>
						</label>
						<label className="label">
							Email:
							<input
								type="email"
								className="input"
								value={email}
								onChange={handleEmailChange}
							/>
						</label>
						<h5>REQUEST APPOINTMENT</h5>

						<div className="checkboxes">
							<label>
								Date:
								<input
									type="date"
									value={mobile}
									onChange={handleMobileChange}
								/>
							</label>

							<label>
								Time:
								<input type="time" value={email} onChange={handleEmailChange} />
							</label>
						</div>
						<button type="submit">Let's plan!</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Appointment;
