import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [operation, setOperation] = useState("");
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(event.target.value);

    if (userInput !== "number") {
      setResult("Invalid input.");
    }

    let splitArray = userInput.split(",");

    if (operation === "sum") {
      let sum = 0;
      splitArray.forEach((num) => {
        sum += parseInt(num);
      });
      setResult(sum);
    }

    if (operation === "average") {
      let average = 0;
      let total = 0;
      splitArray.forEach((num) => {
        total += parseInt(num);
      });
      average = total / splitArray.length;
      setResult(average);
    }

    if (operation === "mode") {
      let mode = 0;
      let obj = {};
      let maxNum = 0;
      for (let num of splitArray) {
        if (!obj[num]) {
          obj[num] = 1;
        } else {
          obj[num] += 1;
        }
      }
      for (let key in obj) {
        if (obj[key] > maxNum) {
          maxNum = obj[key];
          mode = key;
        }
      }
      setResult(mode);
    }
  }

  function handleOperationChange(event) {
    setOperation(event.target.value);
  }

  function handleTextChange(event) {
    setUserInput(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={userInput}
          onChange={handleTextChange}
        />
        <select
          id="operation"
          name="operation"
          value={operation}
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
