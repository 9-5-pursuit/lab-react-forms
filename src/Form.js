import React, { useState } from "react";
import "./Form.css";

function Form() {
  // Set initial state
  const [input, setInput] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Split input value into an array of numbers
    const numbers = input.split(",").map(parseFloat);

    // Check if all input values are valid numbers
    const isValid = numbers.every((number) => !isNaN(number));

    // Perform operation based on selected option
    if (isValid) {
      if (operation === "sum") {
        setResult(numbers.reduce((sum, number) => sum + number, 0));
      } else if (operation === "average") {
        setResult(
          numbers.reduce((sum, number) => sum + number, 0) / numbers.length
        );
      } else if (operation === "mode") {
        const sortedNumbers = numbers.sort((a, b) => a - b);
        let mode = null;
        let count = 0;
        let value = null;
        let maxCount = 0;

        sortedNumbers.forEach((number) => {
          if (number !== value) {
            if (count > maxCount) {
              mode = value;
              maxCount = count;
            }
            value = number;
            count = 1;
          } else {
            count++;
          }
        });

        setResult(mode);
      }
    } else {
      setResult("Invalid input.");
    }
  }

  // Handle input change
  function handleInputChange(event) {
    setInput(event.target.value);
  }

  // Handle operation change
  function handleOperationChange(event) {
    setOperation(event.target.value);
  }

  // Render the form
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="input"
          name="input"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <select
          id="operation"
          name="operation"
          onChange={handleOperationChange}
        >
          <option value=""></option>
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
