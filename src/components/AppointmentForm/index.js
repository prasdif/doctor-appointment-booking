import { useState } from "react";
import "./index.css";

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="appointment-container">
      {!submitted ? (
        <form className="appointment-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Book an Appointment</h2>

          <label htmlFor="name">Patient Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="datetime">Preferred Date & Time</label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            required
            value={formData.datetime}
            onChange={handleChange}
          />

          <button type="submit" className="submit-button">
            Confirm Appointment
          </button>
        </form>
      ) : (
        <div className="confirmation-message">
          <h2>Appointment Confirmed!</h2>
          <p>Thank you, <strong>{formData.name}</strong>.</p>
          <p>We’ve scheduled your appointment for:</p>
          <p><strong>{new Date(formData.datetime).toLocaleString()}</strong></p>
          <p>A confirmation email has been sent to <strong>{formData.email}</strong>.</p>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;
