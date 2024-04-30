import React from "react";

function WordPage() {

    function handleSubmit() {

    }

  return (
    <div>
      <form className="form-word" onSubmit={handleSubmit}>
        <input type="text" />
        <button className="button-update" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default WordPage;
