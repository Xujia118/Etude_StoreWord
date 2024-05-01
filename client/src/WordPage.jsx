import { useState } from "react";

function WordPage({ onLogout, updateWord, word }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateWord(input);
  }

  return (
    <div>
      <h1>{word}</h1>
      <form className="form-word" onSubmit={handleSubmit}>
        <input
          type="text"
          name="newWord"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button-update" type="submit">
          Update
        </button>
      </form>
      <button className="button-logout" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default WordPage;
