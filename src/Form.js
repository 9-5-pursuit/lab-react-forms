import React, { useState } from "react";
import "./Form.css";

function Form() {

const [values, setValues] = useState("");
const [operation, setOperation] = useState("");
const [result, setResult] = useState("");

function handleCalculation() {
  let valuesArray = values.split(","); // ['1', '2', '3']

  for (let i = 0; i < valuesArray.length; i++) { // [1, 2, 3]
    valuesArray[i] = parseInt(valuesArray[i]);
  }

  // '\d' aka Digit -> matches any digit character (0-9). '+' is a quantifier to match 1 or more of the preceding token, in this case, a digit. then we use '()' to indicate a grouping of tokens, in this case a ',' character and a group of digits when we put ',\d+' inside the parentheses. Just after the closing parentheses we have '*' indicating matching 0 or more of the preceding token - matching the preceding group. All of this allows us to only test for if digits and commas are in our input values and if anything else is found, it will either be ignored or stated as invalid input.
  const regex = /\d+(,\d+)*/g;

  if (regex.test(valuesArray)) {
    if (operation === "sum") {
      setResult(handleSum(valuesArray));
    } else if (operation === "average") {
      setResult(handleAvg(valuesArray));
    } else if (operation === "mode") {
      setResult(handleMode(valuesArray));
    } else if (operation === "") {
      setResult("Invalid input.");
    }
  } else {
    setResult("Invalid input.");
  }
}

function handleSum(valuesArray) {

  const initialValue = 0;

  // return number
  return valuesArray.reduce(
    (accumulatedValues, currentValue) => accumulatedValues + currentValue, initialValue
    );
}

function handleAvg(valuesArray) {

    // return number
  return (handleSum(valuesArray) / valuesArray.length);
}

function handleMode(valuesArray) {
    // return number

    // 1,2,3,3,5,7 -> 3
  return valuesArray.sort((a,b) => valuesArray.filter(val => val===a).length - valuesArray.filter(val => val===b).length).pop();
}

function handleSubmit(e) {
  e.preventDefault();

  if (result !== "Invalid input.") {
    setValues("");
    setOperation("");
  }
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={values} onChange={e => setValues(e.target.value)} class={
          result === "Invalid input." && "error"
        }
        />
        <select id="operation" name="operation" value={operation} onChange={e => setOperation(e.target.value)} class={
          result === "Invalid input." && "error"
        }
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleCalculation}>Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
