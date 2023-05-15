import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [userInput, setInput] = useState("");
  const [operation, setOperation] = useState("");
  const [validForm, SetValidForm] = useState(true);
  const [result, setResult] = useState(null);

  function convetToArray() {
    return userInput.split(",").map((i) => parseInt(i));
  }

  function isValidForm(numberArray) {
    if (numberArray.length === 0 || operation === "") return false;
    for (const number of numberArray) {
      if (isNaN(number)) return false;
    }
    return true;
  }

  function getMode(numberArray) {
    const sortedNumbers = numberArray.sort();
    let max = 0;
    let counter = 0;
    let value = 0;
    for (let i = 0; i < sortedNumbers.length; i++) {
      if (sortedNumbers[i] === sortedNumbers[i + 1]) {
        counter++;
        if (counter > max) {
          max = counter;
          value = sortedNumbers[i];
        }
      } else {
        counter = 0;
      }
    }
  }
  function getAverage(numberArray) {
    const sum = getSum(numberArray);
    const average = sum / numberArray.length;
    console.log(average);
  }
  function getSum(numberArray) {
    const sum = numberArray.reduce((total, current) => total + current, 0);
    setResult(sum);
    return sum;
  }

  function resetForm() {
    setInput("");
    setOperation("");
  }

  function handleInput(e) {
    e.preventDefault();
    SetValidForm(true);

    const numberArray = convetToArray();

    if (!isValidForm(numberArray)) {
      return SetValidForm(false);
    }

    if (operation === "mode") {
      const mode = getMode(numberArray);
      setResult(mode);
    } else if (operation === "average") {
      const average = getAverage(numberArray);
      setResult(average);
      getAverage(numberArray);
    } else if (operation === "sum") {
      const sum = getSum(numberArray);
      setResult(sum);
    }
    resetForm();
  }

  return (
    <>
      <form onSubmit={handleInput}>
        <input
          id="values"
          name="values"
          type="text"
          value={userInput}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{validForm ? "0" : "invalid input"}</p>
      </section>
    </>
  );
}

export default Form;
