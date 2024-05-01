import { useState } from "react";

function FormLogin({ onLogin }) {
  const [input, setInput] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    onLogin(input);
  }

  return (
    <div>
      <form className="form-login" onSubmit={handleSubmitForm}>
        <input
          className="input-username"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button-login" type="submit">
          Login
        </button>
        {/* <p className="input-error-message">{error}</p> */}
      </form>
    </div>
  );
}

export default FormLogin;
