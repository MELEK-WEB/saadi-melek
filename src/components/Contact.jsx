import React, { useState } from "react";
import { Melek_Data } from "../utils/util";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [to, setTo] = useState("")
  const [message, setMessage] = useState("")
  const [fullName, setfullName] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_03mheam', 'template_oxxymz9', e.target,'znKcmnCNI6HXWEdWn')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Error sending email');
      });
    }
  return (
    <>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form onSubmit={sendEmail } className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Full name"
              required
             onChange={(e)=>{setfullName(e.target.value)}}
            />

            <input
              type="email"
              name="to"
              className="form-input"
              placeholder="Email address"
              required
              onChange={(e)=>{setTo(e.target.value)}}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            onChange={(e)=>{setMessage(e.target.value)}}
          ></textarea>

          <button className="form-btn" type="submit"  >
            
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </>
  );
}
