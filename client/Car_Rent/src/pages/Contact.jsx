import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import emailjs from "emailjs-com"; // Import Email.js

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ivwhzlb", // Replace with your Email.js service ID
        "template_nrig0mi", // Replace with your Email.js template ID
        {
          name: name,
          email: email,
          message: message,
        },
        "WxdKdc_x7oznUypel" // Replace with your Email.js user ID
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        // You can add code to handle success (e.g., show a success message).
      })
      .catch((error) => {
        console.error("Email sending failed", error);
        // You can add code to handle errors (e.g., show an error message).
      });
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <Form onSubmit={sendEmail}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </FormGroup>
                <button className="contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>
            {/* ... (the rest of your Contact component) */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
