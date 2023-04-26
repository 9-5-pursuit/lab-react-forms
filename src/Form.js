import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  let add = 0;
  let averageNumber = 0;


  function handleSubmit(e) {
    e.preventDefault();
    console.log("values ", values);
    console.log("operation ", setOperation);
    console.log("result ", setResult);

    if (!values) {
      setResult("Invalid input.")
    }

    if (!operation) {
      setResult("Invalid input.")
    }

    if (operation === "sum") {
       setResult(+ add)
    } else if (operation === "average") {
      averageNumber = add / values.length;
      setResult(+ averageNumber);
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
        <p></p>
      </section>
    </>
  );
}

export default Form;
