import { useState } from "react";

function WordPage({ onLogout, updateWord, word }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateWord(input);
  }

  return (
    <div>
      <h1 className="stored-word">{word}</h1>
      <form className="form-word" onSubmit={handleSubmit}>
        <input
          className="input-word"
          type="text"
          name="newWord"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button-submit" type="submit">
          Update
        </button>
      </form>
      {/* <p className="input-error-message">{error}</p> */}
      <button className="button-logout" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default WordPage;
