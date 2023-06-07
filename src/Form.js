import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [numbers, setNumbers] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleNumbersChange = (event) => {
    setNumbers(event.target.value);
    setIsValid(true);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const calculateResult = () => {
    if (numbers.trim() === "") {
      setResult("Invalid input.");
      setIsValid(false);
      return;
    }

    const numberArray = numbers.split(",").map((num) => Number(num.trim()));
    const isValidInput = numberArray.every((num) => !isNaN(num));

    if (!isValidInput) {
      setIsValid(false);
      setResult("Invalid input.");
      return;
    }

    setIsValid(true);

    let calculatedResult;
    if (operation === "sum") {
      calculatedResult = numberArray.reduce((acc, num) => acc + num, 0);
    } else if (operation === "average") {
      calculatedResult =
        numberArray.reduce((acc, num) => acc + num, 0) / numberArray.length;
    } else if (operation === "mode") {
      const frequencyMap = {};
      numberArray.forEach((num) => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      });

      let maxFrequency = 0;
      let mode;

      for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
          maxFrequency = frequencyMap[num];
          mode = num;
        }
      }

      calculatedResult = mode;
    }

    setResult(calculatedResult.toString());
    setNumbers("");
  };

  const handleCalculate = (event) => {
    event.preventDefault(); // Prevent the form from being submitted and refreshing the page
    calculateResult();
    if (isValid) {
      setNumbers("");
    }
  };

  const handleBlur = () => {
    if (!isValid) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <>
      <form>
        <input
          id="values"
          name="values"
          type="text"
          value={numbers}
          onChange={handleNumbersChange}
          onSubmit={handleCalculate}
          onBlur={handleBlur}
          className={isValid ? "" : "error"}
        />
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={handleOperationChange}
          onBlur={handleBlur}
          className={isValid ? "" : "error"}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={handleCalculate}>Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
