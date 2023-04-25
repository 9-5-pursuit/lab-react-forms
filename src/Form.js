import { useState } from "react";
import "./Form.css";

function Form() {
  // Define state variables using useState hook
  const [select, setSelect] = useState(""); // Selected operation (sum, average, mode)
  const [numberArray, setNumberArray] = useState(); // Array of numbers from input
  const [result, setResult] = useState(); // Calculated result
  const [inputClass, setInputClass] = useState(); // CSS class for input field
  const [selectClass, setSelectClass] = useState(); // CSS class for select field

  // Event handler for select field change
  function handleSelectChange(event) {
    setSelect(event.target.value); // Update selected operation in state
  }

  // Event handler for input field change
  function handleNumberArray(event) {
    setNumberArray(event.target.value.split(",")); // Update numberArray with parsed array of numbers from input
  }

  // Event handler for form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Check for invalid input: empty select or non-numeric values in numberArray
    if (
      select === "" ||
      numberArray.some((num) => {
        return isNaN(num);
      })
    ) {
      setResult("Invalid input."); // Set error message in result state variable
      setInputClass("error"); // Set CSS class for input field for error styling
      setSelectClass("error"); // Set CSS class for select field for error styling
    } else {
      // Perform calculation based on selected operation
      if (select === "sum") {
        let sum = 0;
        numberArray.map((num) => {
          return (sum += parseInt(num));
        });
        setResult(sum); // Set calculated sum in result state variable
      }
      if (select === "average") {
        let average = 0;
        numberArray.map((num) => {
          return (average += parseInt(num));
        });
        average = average / numberArray.length;
        setResult(average); // Set calculated average in result state variable
      }
      if (select === "mode") {
        let modeObj = {};
        let mode = numberArray[0];
        let maxCount = 1;

        // Calculate mode using an object to store frequency counts
        for (let i = 0; i < numberArray.length; i++) {
          let num = numberArray[i];

          if (modeObj[num] == null) {
            modeObj[num] = 1;
          } else {
            modeObj[num]++;
          }
          if (modeObj[num] > maxCount) {
            mode = num;
            maxCount = modeObj[num];
          }
        }
        setResult(mode); // Set calculated mode in result state variable
      }
      // Reset state variables and CSS classes
      setNumberArray("");
      setSelect("");
      setInputClass("");
      setSelectClass("");
    }
  }
  // Render the from and results
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className={inputClass}
          id="values"
          name="values"
          type="text"
          onChange={handleNumberArray}
          value={numberArray}
        />
        <select
          className={selectClass}
          id="operation"
          name="operation"
          onChange={handleSelectChange}
          value={select}
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
