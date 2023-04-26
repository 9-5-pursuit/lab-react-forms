import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [request, setReq] = useState({ operation: "", values: "" });

  function handleSubmit(e) {
    e.preventDefault();
    let numbers = request.values.split(",");
    let error = false;
    let results = document.getElementById("result");
    let inputValues = document.getElementById("values");
    let inputOps = document.getElementById("operation");
    if (request.operation === "sum") {
      let nums = 0;
      numbers.forEach((e) => {
        if (e === "") {
          error = true;
        } else {
          nums += Number(e);
        }
      });
      if (error || isNaN(nums)) {
        inputValues.className = "error";
        inputOps.className = "error";
        results.innerHTML = "Invalid input.";
      } else {
        results.innerHTML = nums;
        inputValues.className = "";
        inputOps.className = "";
      }
    } else if (request.operation === "average") {
      let nums = 0;
      numbers.forEach((e) => {
        if (e === "") {
          error = true;
        } else {
          nums += Number(e);
        }
      });
      if (error || isNaN(nums)) {
        inputValues.className = "error";
        inputOps.className = "error";
        results.innerHTML = "Invalid input.";
      } else {
        results.innerHTML = nums / numbers.length;
        inputValues.className = "";
        inputOps.className = "";
      }
    } else if (request.operation === "mode") {
      let countNum = {};
      numbers.forEach((e) => {
        if (countNum[e]) {
          countNum[e]++;
        } else {
          countNum[e] = 1;
        }
      });
      let highest = 0;
      for (let key in countNum) {
        if (highest === 0) {
          highest = key;
        } else {
          if (countNum[highest] < countNum[key]) {
            highest = key;
          }
        }
      }
      results.innerHTML = highest;
      inputValues.className = "";
      inputOps.className = "";
    } else {
      inputValues.className = "error";
      inputOps.className = "error";
      results.innerHTML = "Invalid input";
    }
  }

  function handleReset(e) {
    setReq({ ...request, [e.target.name]: "" });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={request.values}
          onChange={(e) => setReq({ ...request, values: e.target.value })}
        />
        <select
          onChange={(e) => setReq({ ...request, operation: e.target.value })}
          id="operation"
          name="operation"
          value={request.operation}
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
