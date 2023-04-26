import React from "react";
import "./Form.css";

import { useState } from 'react';

function Form() {
  const [selectOption, setSelectOption] = useState("");
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    calculateInput(textInput);
  }

  function sumArray(array) {
    let sum = 0;

    array.forEach((element) => {
      sum += element;
    })

    return sum;
  }

  function averageArray(array) {
    let average = 0;
    let sum = 0;

    array.forEach((element) => {
      sum += element;
      average = sum / array.length;
    })

    return average;
  }

  function modeArray(array) {
    let freq = {};
  
    for (let number of array) {
      freq[number] ? freq[number]++ : freq[number] = 1;
    }  
    
    let compare = 0;
    let mode;
    
    for (let item in freq) {
      if (freq[item] > compare) {
        compare = freq[item];
        mode = item;
      }
    }

    return mode;
  }

  function calculateInput(str) {
    let strNumArr = str.split(",");

    if (!(strNumArr) || !(strNumArr[0]) || !(strNumArr[strNumArr.length - 1])) {
      setResult("Invalid input.");
      return null;
    }

    let numArr = [];

    for (const strNum of strNumArr) {
      if (!(Number(strNum))) {
        setResult("Invalid input.")
        return null;
      } else {
        numArr.push(Number(strNum));
      }
    }


    switch(selectOption) {
      case "sum":
        setResult(sumArray(numArr));
        break;
      case "average":
        setResult(averageArray(numArr));
        break;
      case "mode":
        setResult(modeArray(numArr));
        break;
      default:
        setResult("Invalid input.")
        break;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" onChange={(e) => {
          setTextInput(e.target.value)
          }}/>
        <select id="operation" name="operation" onChange={(e) => {setSelectOption(e.target.value)}}>
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
