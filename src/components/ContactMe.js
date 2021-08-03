import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import './assets/css/app.css'

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log("errorMessage", errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  console.log(formState);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label className="contact-label" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            onMouseLeave={handleChange}
          />
        </div>
        <div className="form-item">
          <label  className="contact-label" htmlFor="email">Email address:</label>"
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            onMouseLeave={handleChange}
          />
        </div>
        <div className="form-item">
          <label className="contact-label" htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            onMouseLeave={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <a href={`mailto:brgerner@gmail.com?subject=Hello Ben!&body=${message} < from ${name} (${email}) >`}><button data-testid="contact-submit" id="contact-button" type="button">Submit</button></a>
      </form>
    </section>
  );
}
export default ContactForm;