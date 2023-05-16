import React, { useState } from "react";
import "./Form.css";

function Form() {
  //useState:
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [validForm, setValidForm] = useState(true);
  const [result, setResults] = useState(null);

  //
  function convertArray() {
    console.log("form submitted");
    console.log(values.split(","));
    return values.split(",").map((value) => parseInt(value)); // separate and then loop through values and turn into numbers
  }

  //error handling
  function isValidForm(numbersArray) {
    if (numbersArray.length === 0 || operation === "") return false;

    for (const number of numbersArray) {
      if (isNaN(number)) return false;
    }

    return true;
  }
  //calculo para suma
  function getSum(numbersArray) {
    // otro ejemplo
    //  let total = 0;

    //  for (const number of numbersArray) {
    //   total += number
    //  }
    // return total;

    const sum = numbersArray.reduce((total, current) => total + current, 0);
    setResults(sum);
    return sum;
  }

  // resetear forma
  function resetResults() {
    setValues("");
    setOperation("");
  }

  // calculo para promedio
  function getAverage(numbersArray) {
    const sum = getSum(numbersArray);
    const average = sum / numbersArray.length;
    console.log(average);
    return average;
  }


  // calculo para numero que aparece mas frecuente = moda
  function getMode(numbersArray) {
    const sortedArray = numbersArray.sort();
    console.log(sortedArray);
    //accmulator pattern
    let maxOfNumber = 0;
    let currentNumber = 0;
    let value = 0;

    //checking if current number is the same as next number sortedArray[i] === sortedArray[i + 1]
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === sortedArray[i + 1]) {
        currentNumber++;
        if (currentNumber > maxOfNumber) {
          maxOfNumber = currentNumber;
          value = sortedArray[i];
        }
      } else {
        currentNumber = 0;
      }
    }
    return value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setValidForm(true);

    const numbersArray = convertArray();

    //validate form
    if (!isValidForm(numbersArray)) {
      return setValidForm(false);
    }

    //operations aka operation from state
    if (operation === "mode") {
      const mode = getMode(numbersArray);
      setResults(mode);
    } else if (operation === "sum") {
      const sum = getSum(numbersArray);
      setResults(sum);
    } else if (operation === "average") {
      const average = getAverage(numbersArray);
      setResults(average);
    }
    //agregar al final para prevenir problemas
    resetResults();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          className={!validForm && "error"}
          name="values"
          type="text"
          value={values}
          onChange={(event) => setValues(event.target.value)}
        />
        <select
          id="operation"
          className={!validForm && "error"}
          name="operation"
          value={operation}
          onChange={(event) => setOperation(event.target.value)}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p> {validForm ? result : "Invalid input."} </p>
      </section>
    </>
  );
}

export default Form;
