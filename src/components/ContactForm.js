import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_CONTACT_FORM);

  if (state.succeeded) {
    return (
      <h1
        className="heading-1"
        style={{
          lineHeight: "8rem",
          textAlign: "center",
          color: "#96d4c6",
        }}
      >
        Thanks for contact me!
      </h1>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Full Name"
          id="name"
          name="name"
          minLength={2}
          required
        />
        <label htmlFor="name" className="form__label">
          Full Name
        </label>
      </div>
      <div className="form__group">
        <input
          type="email"
          className="form__input"
          placeholder="Email Address"
          id="email"
          name="email"
          required
        />
        <label htmlFor="email" className="form__label">
          Email
          Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {
            <ValidationError
              style={{ display: "inline-block", color: "#ff7730" }}
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          }
        </label>
      </div>
      <div className="form__group">
        <textarea
          className="form__input"
          placeholder="Message"
          minLength={10}
          id="message"
          name="message"
          required
        />
        <label htmlFor="message" className="form__label">
          Message
        </label>
      </div>
      <div className="form__group"></div>
      <div className="form__group">
        <button
          className="btn btn--green"
          type="submit"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
