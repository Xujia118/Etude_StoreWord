import React, { useState } from "react";

function FormLogin({ onLogin, onLogout }) {
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
      <button className="button-logout" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default FormLogin;
