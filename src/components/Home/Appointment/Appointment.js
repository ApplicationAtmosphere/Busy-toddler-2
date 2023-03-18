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
	const [timeChecked, setTimeChecked] = useState(false);
	const [selectDate2, setSelectedDate2] = useState(false);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const handleDateChange2 = (date) => {
		setSelectedDate2(date);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleMobileChange = (event) => {
		setMobile(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleTimeChange = (event) => {
		setTimeChecked(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({
			selectedDate,
			selectDate2,
			name,
			mobile,
			email,
			timeChecked,
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
						<label className="text_label">
							Name:
							<input
								type="text"
								className="text_input"
								value={name}
								onChange={handleNameChange}
							/>
						</label>
						<label className="text_label">
							Mobile:
							<input
								type="tel"
								className="text_input_mobile"
								value={mobile}
								onChange={handleMobileChange}
							/>
						</label>
						<label className="text_label">
							Email:
							<input
								type="email"
								className="text_input"
								value={email}
								onChange={handleEmailChange}
							/>
						</label>
						<h5>REQUEST APPOINTMENT</h5>

						<div className="checkboxes">
							<label>
								Date:
								<input
									className="select_input"
									type="date"
									value={mobile}
									onChange={handleDateChange2}
								/>
							</label>

							<label>
								Time:
								<input
									className="select_input"
									type="time"
									value={email}
									onChange={handleTimeChange}
								/>
							</label>
						</div>
						<button className="appointment_btn" type="submit">
							Let's plan!
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Appointment;
