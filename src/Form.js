import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [validForm, setValidForm] = useState(true);
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setValidForm(true);
    console.log("form was submitted");

    const array = convertToNumbersArray();

    if (!isValidForm(array)) {
      return setValidForm(false);
    }

    if (operation === "mode") {
      const mode = modeCalc(array);
      setResult(mode);
    } else if (operation === "average") {
      const average = averageCalc(array);
      setResult(average);
    } else if (operation === "sum") {
      const sum = sumCalc(array);
      setResult(sum);
    }
  }

  function convertToNumbersArray() {
    console.log(values);
    console.log(values.split(","));
    return values.split(",").map((value) => parseFloat(value));
  }

  function isValidForm(array) {
    if (array.length === 0 || operation === "") {
      return false;
    }
    array.forEach((number) => {
      if (isNaN(number)) {
        return false;
      }
    });

    return true;
  }

  function modeCalc(array) {
    let max = 0;
    let counter = 0;
    let value = 0;

    const sortedArray = array.sort();
    for (let i = 0; i < array.length; i++) {
      if (sortedArray[i] === sortedArray[i + 1]) {
        counter++;
        if (counter > max) {
          max = counter;
          value = sortedArray[i];
        }
      } else {
        counter = 0;
      }
    }

    return value;
  }

  function averageCalc(array) {
    const sum = sumCalc(array);
    return sum / array.length;
  }

  function sumCalc(array) {
    const sum = array.reduce((total, current) => total + current, 0);
    return sum;
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
        <p>{validForm ? result : "Invalid input."}</p>
      </section>
    </>
  );
}

export default Form;
