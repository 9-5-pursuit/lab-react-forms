import React, { useState } from "react";
import "./Form.css";

function Form() {
  /* useState Changes */

  const [input, setInput] = useState("");
  const [valid, setValid] = useState(true);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  return (
    <>
      <form onSubmit={clickSubmit}>
        <input
          id="input"
          name="input"
          value={input}
          type="text"
          onChange={(event) => setInput(event.target.value)}
        />
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={(event) => setOperation(event.target.value)}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{valid ? result : "Invalid input."}</p>
      </section>
    </>
  );
}

export default Form;
