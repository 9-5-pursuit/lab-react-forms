import React from "react";
import "./Form.css";
import { useState } from 'react';

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("")
  const [hasError, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[0-9,]+$/.test(values)) {
      setError(true)
      setResult('Invalid input.')
      return
    }
    setError(false)
    if (operation === 'sum') {
      setResult(values.split(',').reduce((prev, next) => { return parseInt(prev) + parseInt(next) }, 0))
      clearForm()
    }
    else if (operation === 'average') {
      let arr = values.split(',')
      setResult(arr.reduce((prev, next) => { return parseInt(prev) + parseInt(next) }, 0) / arr.length)
      clearForm()
    }
    else if (operation === 'mode') {
      let obj = {}
      let arr = values.split(',')
      arr.forEach(item => {
        if (obj.hasOwnProperty(item)) {
          obj[item] += 1
        } else obj[item] = 0
      })

      let max = Math.max(...Object.values(obj))
      for (let i of arr) {
        if (obj.hasOwnProperty(i) && obj[i] === max) {
          setResult(i)
          clearForm()
          break
        }
      }
    }
  };

  const handleValChange = (event) => {
    setValues(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const clearForm = () => {
    setValues("");
    setOperation("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={values} onChange={handleValChange}
          className={hasError ? 'error' : ''} />
        <select id="operation" name="operation" value={operation} onChange={handleOperationChange}
          className={hasError ? 'error' : ''}>
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
