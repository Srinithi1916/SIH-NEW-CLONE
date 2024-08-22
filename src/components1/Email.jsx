import React from "react";
import "./Email.css"; // Import the CSS file

export default function Email() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "131d62a5-0850-4da6-9287-d86a982da4db");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
        <br></br>
        <br></br>

    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Form
        </button>
        <span className="result-message">{result}</span>
      </form>
    </div>
            </div>
  );
}