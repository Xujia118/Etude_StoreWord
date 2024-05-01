import React, { useState } from "react";

function WordPage({ updateWord, word }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateWord(input);
  }

  return (
    <div>
      <h1>{word}</h1>
      <form className="form-word" onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button className="button-update" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default WordPage;
