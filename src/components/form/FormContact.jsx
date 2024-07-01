import { useEffect, useState } from "react";
import Agradecimento from "../../routes/secceeded/succeeded";
import "./FormContact.css";
import { useForm, ValidationError } from "@formspree/react";

const FormContact = () => {
  const [state, handleSubmit] = useForm("movaqqdr");
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem("formSucceeded");
    return savedValue === "true";
  });

  useEffect(() => {
    if (state.succeeded) {
      setValue(true);
      localStorage.setItem("formSucceeded", "true");
    }
  }, [state.succeeded]);

  if (value) {
    return <Agradecimento />;
  }

  return (
    <>
      <div className="container">
        <h2>Me envie uma mensagem</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="Message"
            placeholder="Digite seu texto aqui"
            id="message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <input
            disabled={state.submitting}
            type="submit"
            className="btn-form"
          />
        </form>
      </div>
    </>
  );
};

export default FormContact;
