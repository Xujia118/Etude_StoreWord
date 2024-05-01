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
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button className="button-login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
