import { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const valuesArr = values.split(",").map(Number);

  function handleSubmit(e) {
    e.preventDefault();
    handleOperation();
    handleReset();
  }

  function handleOperation() {
    for (let i = 0; i < valuesArr.length; i++) {
      if (isNaN(valuesArr[i]) || !values || !operation) {
        return setResult("Invalid Input.");
      }
    }

    if (operation === "sum") {
      setResult(
        valuesArr.reduce(function (previousValue, currentValue) {
          return previousValue + currentValue;
        })
      );
    } else if (operation === "average") {
      const sum = valuesArr.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      });
      setResult(sum / valuesArr.length);
    } else if (operation === "mode") {
      handleMode();
    }
  }

  function handleReset() {
    setValues("");
    setOperation("");
  }

  function handleResultReset() {
    setResult("");
  }

  function handleMode() {
    let counts = {};
    valuesArr.forEach(function (e) {
      if (counts[e] === undefined) {
        counts[e] = 0;
      }
      counts[e] += 1;
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onClick={handleResultReset}
          id="values"
          name="values"
          type="text"
          value={values}
          onChange={(e) => setValues(e.target.value)}
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
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
