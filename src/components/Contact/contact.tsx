import React, { useState } from "react";
import GradientButton from "../Button/gradientbutton";
import Title from "../Title/title";
import { validateEmail, validateMessage, validateName } from "../../errorHandling";


interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const textboxStyling =
    "shadow border rounded w-full py-3 px-3 bg-stone-50 text-stone-800 leading-tight focus:outline-none focus:shadow-outline";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = e.currentTarget.elements.namedItem("name") as HTMLInputElement;

    setNameError(validateName(nameValue.value));
    setEmailError(validateEmail(e.currentTarget.email.value));
    setMessageError(validateMessage(e.currentTarget.message.value));
    
    if (
      !nameError &&
      !emailError &&
      !messageError
    ) {
      e.currentTarget.submit();
    }
  };

  return (
    <>
      <section>
        <Title>Let's Chat</Title>
        <form
          action="https://getform.io/f/14dd19fb-d529-4d63-9da5-4b2ffb1a0745"
          Content-Type="json"
          method="POST"
          className="mx-auto max-2xl bg-stone-50 p-6 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="text-stone-900" htmlFor="name">
              Name
            </label>
            <input
              className={textboxStyling}
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
          </div>
          <div className="mb-4">
            <label className="text-stone-900" htmlFor="name">
              Email
            </label>
            <input
              className={textboxStyling}
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className="text-stone-900" htmlFor="message">
              Message
            </label>
            <textarea
              className={textboxStyling}
              id="message"
              name="message"
              placeholder="Message"
              required
            />
            {messageError && (
              <p className="text-red-500 text-xs">{messageError}</p>
            )}
          </div>
          <input
            type="hidden"
            name="_gotcha"
            className="hidden !important"
          ></input>
          <button className="flex items-center justify-between" type="submit">
            <GradientButton buttonText="Send" />
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
