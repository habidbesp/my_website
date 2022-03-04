import React from "react";
import GridPointsContact from "./GridPointsContact";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="wrapper">
      <div className="contact__heading">
        <h1 className="heading-1 contact__heading--back">Contact</h1>
        <h1 className="contact__heading--front">Contact</h1>
      </div>
      <div className="contact">
        <div className="contact__box--1">
          <div className="contact__form-container">
            <ContactForm />
          </div>
        </div>
        <div className="contact__profile">
          <GridPointsContact
            rows={15}
            columns={15}
            color="rgba(255, 255, 255, 0.2)"
          />
        </div>
      </div>
    </div>
  );
}
