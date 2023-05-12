
import React, { useState } from "react";
import "./Form.css";


function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [validForm, setValidForm] = useState(true);
  const [result, setResult] = useState(null);

  function convertToformArray() {
    return values.split(",").map((value) => parseInt(value));
  }

  function isValidForm(formArray) {
    if (formArray.length === 0 || operation === "") return false;

    for (const number of formArray) {
      if (isNaN(number)) return false;
    }

    return true;
  }

  function getMode(formArray) {
    const sortedNumbers = formArray.sort();

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

  function getSum(formArray) {
    const sum = formArray.reduce((total, current) => total + current, 0);
    return sum;
  }

  function getAverage(formArray) {
    const sum = getSum(formArray);
    return sum / formArray.length;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setValidForm(true);

    const formArray = convertToformArray();

    if (!isValidForm(formArray)) {
      return setValidForm(false);
    }

    if (operation === "mode") {
      const mode = getMode(formArray);
      setResult(mode);
    } else if (operation === "average") {
      const average = getAverage(formArray);
      setResult(average);
    } else if (operation === "sum") {
      const sum = getSum(formArray);
      setResult(sum);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={values}
          onChange={(event) => setValues(event.target.value)}
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
        <p>{validForm ? result : "Invalid Input"}</p>
      </section>
    </>
  );
}

export default Form;

