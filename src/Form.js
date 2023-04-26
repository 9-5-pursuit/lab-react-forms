import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function handleSum(array) {
    return array.reduce((a, b) => a + b, 0);
  }

  function handleAvg(array) {
    return handleSum(array) / array.length;
  }

  function handleMode(array) {
    return array
      .sort(
        (a, b) =>
          array.filter((ele) => ele === a).length -
          array.filter((ele) => ele === b).length
      )
      .pop();
  }

  function handleSubmit(e) {
    e.preventDefault();
    let inputArray = values.split(",");
    let parseArray = inputArray.map((input) => parseInt(input));

    //const regex = /\d+(,\d+)*/g;
    // if (regex.test(parseArray)) {

    // } else {
    //   setResult("Invalid input.")
    // }
    if (operation === "sum") {
      handleSum(parseArray) !== "NaN"
        ? setResult(handleSum(parseArray))
        : setResult("Invalid input.");
      // setResult(handleSum(parseArray));
    } else if (operation === "average") {
      handleAvg(parseArray) !== "NaN"
        ? setResult(handleAvg(parseArray))
        : setResult("Invalid input.");
      //setResult(handleAvg(parseArray));
    } else if (operation === "mode") {
      handleMode(parseArray) !== "NaN"
        ? setResult(handleMode(parseArray))
        : setResult("Invalid input.");
      //setResult(handleMode(parseArray));
    } else if (operation === "") {
      setResult("Invalid input.");
    }
  }
  return (
    <>
      <form>
        <input
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
        <button type="submit" onClick={handleSubmit}>
          Calculate
        </button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
