import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import {  Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Message:", message);

    emailjs
      .sendForm(
        "service_ibr8r2v",
        "template_udbzlbj",
        form.current,
        "RcApGEp-Su9_KGK4V"
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Thank you! Your message has been submitted successfully.");
        setName("");
        setEmail("");
        setMessage("");
        setMessageSent(true);
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("Oops! Something went wrong. Please try again later.");
      });
  };

  

  return (
    <div className="contact-continer">
      <div className="contact-us-container">
        <h2 className="contact-header" >Contact Us</h2>
        <p className="description-contact">Feel free to share with us </p>
        {!messageSent ? (
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="label-contact" >Name:</label>
              <input
                name="user_name"
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label-contact" >Email:</label>
              <input
                name="user_email"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="label-contact" >Message:</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
                className="form-textarea"
              ></textarea>
            </div>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="message-sent-container">
            <Link to="/" ><button className="Home-button-contact" >
              Go to Home Page
            </button></Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
