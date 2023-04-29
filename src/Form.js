import React, { useState } from "react";
import "./Form.css";

function Form() {
  /* useState Changes */

  const [input, setInput] = useState("");
  const [valid, setValid] = useState(true);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  /* functions */

  //fn to convert input and seperate with commas then parse into number
  function convertInputToArray() {
    return input.split(",").map((number) => parseInt(number));
  }
  //fn to makes sure input is number
  function isValid(inputArray) {
    if (inputArray.length === 0 || operation === "") {
      setValid(false);
    }

    inputArray.map((number) => {
      if (isNaN(number) === true) {
        setValid(false);
      }
      return null;
    });
  }
  // fn adds numbers in array together
  function sum(inputArray) {
    let total = 0;
    for (let i = 0; i < inputArray.length; i++) {
      total += inputArray[i];
    }
    return total;
  }
  //fn finds average of numbers in array
  function average(inputArray) {
    let average = sum(inputArray) / inputArray.length;
    return average;
  }
  //fn finds mode of numbers in array
  function mode(inputArray) {
    inputArray.sort();

    let totalCount = 0;
    let currentCount = 0;
    let most = 0;

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === inputArray[i + 1]) {
        currentCount++;
      }
      if (currentCount > totalCount) {
        totalCount = currentCount;
        most = inputArray[i];
      }
    }
    return most;
  }
  // resets form fields
  function resetForm() {
    setInput("");
    setOperation("");
  }

  /* Click event*/
  function clickSubmit(event) {
    event.preventDefault();

    setValid(true);

    let inputArray = convertInputToArray();

    isValid(inputArray);

    if (operation === "sum") {
      setResult(sum(inputArray));
    }
    if (operation === "average") {
      setResult(average(inputArray));
    }
    if (operation === "mode") {
      setResult(mode(inputArray));
    }

    if (valid === true) {
      resetForm();
    }
  }

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
