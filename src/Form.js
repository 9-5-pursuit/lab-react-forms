import React, { useState } from "react";
import { operations } from "./operationsFunc";
import "./Form.css";

function Form() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [numbers, setNumbers] = useState("");
  const [operation, setOperation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if numbers or operation is empty
    if (!numbers || !operation) {
      resetForm();
      setError(true);
      setResult("Invalid input.");
      return;
    }

    // Perform the selected operation on the numbers entered
    const result = operations[operation](numbers);

    // Handle the result
    if (isNaN(result)) {
      setError(true);
      setResult("Invalid input.");
    } else {
      resetForm();
      setError(false);
      setResult(result);
    }
  };

  // Reset the form input values and selected operation
  const resetForm = () => {
    setNumbers("");
    setOperation("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numbers">Numbers</label>
        <input
          id="values"
          name="values"
          type="text"
          value={numbers}
          className={error ? "error" : ""}
          onChange={(e) => setNumbers(e.target.value)}
        />

        <label htmlFor="operation">Operation</label>
        <select
          id="operation"
          name="operation"
          value={operation}
          className={error ? "error" : ""}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="">Select operation</option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
