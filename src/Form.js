import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [validForm, setValidForm] = useState(true);
  const [result, setResult] = useState(null);

  function convertToNumbersArray() {
    const numbers = values.split(",").map((value) => parseInt(value));
    return numbers;
  }

  function isValidForm(numbersArray) {
    if (numbersArray.length === 0 || operation === "") {
      return false;
    }

    for (const number of numbersArray) {
      if (isNaN(number)) return false;
    }

    return true;
  }

  function resetForm() {
    setValues("");
    setOperation("");
  }

  function getMode(numbersArray) {
    const sortedNumbers = numbersArray.sort();

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
    return value;
  }

  function getAverage(numbersArray) {
    const sum = getSum(numbersArray);
    const average = sum / numbersArray.length;
    return average;
  }

  function getSum(numbersArray) {
    if (!numbersArray || numbersArray.length === 0) {
      return 0;
    }

    const sum = numbersArray.reduce(
      (total, current) => total + parseInt(current),
      0
    );
    return sum;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setValidForm(true);

    const numbersArray = convertToNumbersArray();

    if (!isValidForm(numbersArray)) {
      return setValidForm(false);
    }

    let calculatedResult = null;
    if (operation === "mode") {
      calculatedResult = getMode(numbersArray);
    } else if (operation === "average") {
      calculatedResult = getAverage(numbersArray);
    } else if (operation === "sum") {
      calculatedResult = getSum(numbersArray);
    }

    setResult(calculatedResult);
    resetForm();
  }

  return (
    <>
       <form onSubmit={handleSubmit}>
        <input
          id="values"
          className={!validForm ? "error" : ""}
          name="values"
          type="text"
          value={values}
          onChange={(event) => setValues(event.target.value)}
        />
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={(event) => setOperation(event.target.value)}>
        
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
      <p>{validForm ? result : "Invalid input."}</p>
      </section>
    </>
  );
}

export default Form;
