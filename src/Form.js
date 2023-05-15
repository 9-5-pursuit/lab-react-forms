import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [validForm, setValidForm] = useState(true);
  const [result, setResult] = useState(null);

  function convertToNumbersArray() {
    console.log("convertToNumbersArray values", values);
    console.log("convertToNumbersArray values split", values.split(","));

    return values.split(",").map((value) => parseInt(value));
  }

  function isValidForm(numbersArray) {
    if (numbersArray.length === 0 || operation === "") return false;

    for (const number of numbersArray) {
      if (isNaN(number)) return false;
    }

    return true;
  }

  function getMode(numbersArray) {
    const sortedNumbers = numbersArray.sort();
    console.log(sortedNumbers);

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

  function getSum(numbersArray) {
    const sum = numbersArray.reduce((total, current) => total + current, 0);
    return sum;
  }

  function getAverage(numbersArray) {
    const sum = getSum(numbersArray);
    return sum / numbersArray.length;
  }

  function resetForm() {
    setValues("");
    setOperation("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setValidForm(true);

    const numbersArray = convertToNumbersArray();

    if (!isValidForm(numbersArray)) {
      return setValidForm(false);
    }

    if (operation === "mode") {
      const mode = getMode(numbersArray);
      setResult(mode);
    } else if (operation === "average") {
      const average = getAverage(numbersArray);
      setResult(average);
    } else if (operation === "sum") {
      const sum = getSum(numbersArray);
      setResult(sum);
    }

    resetForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          className={!validForm && "error"}
          name="values"
          type="text"
          value={values}
          onChange={(event) => setValues(event.target.value)}
        />
        <select
          id="operation"
          className={!validForm && "error"}
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
        <p>{validForm ? result : "Invalid input."}</p>
      </section>
    </>
  );
}

export default Form;
