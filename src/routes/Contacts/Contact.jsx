import React, { useState } from "react";
import GetinTouch from "../../components/FaleComigo/GetinTouch";
import FormContact from "../../components/form/FormContact";
import "./Contact.css";
import '../../Responsivo.css'

// IMPORT ICONS
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Contact = () => {
  const [step, setStep] = useState(0);

  const steps = [
    <GetinTouch key="getInTouch" />,
    <FormContact key="formContact" />,
  ];

  const nextStep = () => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const prevStep = () => {
    setStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  return (
    <div className="contact-container">
      <div className="navigation-buttons">
        {step > 0 && (
          <button className="left" onClick={prevStep}>
            <FaArrowLeft />
          </button>
        )}
        {step < steps.length - 1 && (
          <button className="right" onClick={nextStep}>
            <FaArrowRight />
          </button>
        )}
      </div>
      {steps[step]}
    </div>
  );
};

export default Contact;
