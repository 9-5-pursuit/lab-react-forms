import React, { useState } from "react";
import "./Form.css";

function Form() {

 // useState declarations 
const [values, setValues] = useState("");
const [operation, setOperation] = useState("");
const [valid, setValid] = useState(true);
const [result, setResult] = useState(0);

// Helper Functions 
function convertToNumberArray(){
  return values.split(",").map((number) => parseInt(number));
}

function handleValid(numberArray){
  if(numberArray.length === 0 || operation === ""){
    setValid(false)
  }

  numberArray.map((number) => {
    if(isNaN(number) === true){
      setValid(false)
    }
    return null;
  })
}

function sum(numberArray){
  let total = 0;
  for(let i = 0; i < numberArray.length; i++){
    total += numberArray[i];
  }
  return total;
}

function average(numberArray){
  let average = (sum(numberArray) / numberArray.length);
  return average;
}

function mode(numberArray){
  numberArray.sort();

  let maxCount = 0;
  let currentCount = 0;
  let value = 0;

  for(let i = 0; i < numberArray.length; i++){
    if(numberArray[i] === numberArray[i + 1]){
      currentCount++;
    }
    if(currentCount > maxCount){
      maxCount = currentCount;
      value = numberArray[i];
    }
  }
  return value;
}

function resetForm(){
  setValues("");
  setOperation("");
}



// Function that runs after clicking calculate button
function handleSubmit(event){
  event.preventDefault();
  setValid(true);

  let numberArray = convertToNumberArray();

  handleValid(numberArray);

  if(operation === "sum"){
    setResult(sum(numberArray));
  }
  if(operation === 'average'){
    setResult(average(numberArray));
  }
  if(operation === 'mode'){
    setResult(mode(numberArray));
  }

  if(valid === true){
    resetForm();
  }

}



return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" value={values} type="text" onChange={(e) => setValues(e.target.value)} />
        <select id="operation" name="operation" value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{valid ? result : 'Invalid input.'}</p>
      </section>
    </>
  );
}

export default Form;
