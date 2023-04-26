import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [arr, setArr] = useState([]);

  let [result, setResult] = useState(0);

  function getValue(e) {
    e.preventDefault();
    let textValue = document.getElementById("values");

    let arr = textValue.value.split(",");
    setArr(arr);
    selectOperation();
  }

  function selectOperation() {
    // do an onChange
    let operation = document.getElementById("operation");
    if (operation.value === "sum") {
      getSum(arr);
      // console.log(setResult(getSum(arr)));
    }
    if (operation.value === "average") {
      getAvg(arr);
    }
    if (operation.value === "mode") {
      // console.log(arr);
      getMode(arr);
    }
  }

  let sum = 0;
  function getSum(arr) {
    console.log(`this is my ${arr}`);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      // console.log(arr[i]);
      // console.log(sum);
    }
    // console.log(sum);
    return setResult(sum);
  }

  function getAvg(arr) {}

  function getMode(arr) {
    // count amount of occurences of each number

    // create object
    const obj = {};
    // loop over array
    arr.forEach((number) => {
      // for each number in array,
      // if it doesn't already exist as a key on the
      // object, create one and set its value to 1.
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        // if it already exists as key on the object,
        // increment its corresponding value.
        obj[number] += 1;
      }
    });

    // return object key with highest value.
    let highestValue = 0;
    let highestValueKey = 0;

    for (let key in obj) {
      const value = obj[key];
      if (value > highestValue) {
        highestValue = value;
        highestValueKey = key;
      }
    }

    // convert key back to number
    return setResult(Number(highestValueKey));
  }

  function getResult() {}

  return (
    <>
      <form onSubmit={getValue}>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation" onChange={selectOperation}>
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
