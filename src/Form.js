import React, { useState } from "react";
import "./Form.css";

function Form({ result, setResult }) {
  const [userInput, setUserInput] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const select = document.querySelector("select");
  const input = document.querySelector("input");

  // fn to handle user input
  function handleUserInput(event) {
    setUserInput(event.target.value);
  }

  // fn to convert user input
  function convertUserInput(input, option) {
    const numArr = input.split(",");

    // let answer = 0;
    let total = numArr.reduce((num, acc) => +num + +acc);

    // if invalid input
    if (isNaN(total) || input === "" || option === "") {
      return "Invalid input.";
    }

    // conditional for option choice
    if (option === "sum") return total;

    if (option === "average") return total / numArr.length;

    if (option === "mode") {
      const modeObj = {}; // to hold the nums and nums frequency
      numArr.map((num) => {
        if (!modeObj[num]) {
          modeObj[num] = 1;
        } else {
          modeObj[num] += 1;
        }
      });
      let freqVal = 0;
      let numKey;

      for (let key in modeObj) {
        if (modeObj[key] > freqVal) {
          freqVal = modeObj[key];
          numKey = key;
        }
      }
      return numKey;
    }
  }

  function resetForm() {
    setUserInput("");
    setSelectOption("");
  }

  // fn to handle submitted input
  function handleSubmit(event) {
    event.preventDefault();
    setResult(convertUserInput(userInput, selectOption));

    if (convertUserInput(userInput, selectOption) !== "Invalid input.") {
      select.classList.remove("error");
      input.classList.remove("error");
      resetForm();
    } else {
      select.classList.toggle("error");
      input.classList.toggle("error");
    }
  }
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <input
        id="values"
        name="values"
        type="text"
        value={userInput}
        onChange={(event) => {
          handleUserInput(event);
        }}
      />
      <select
        id="operation"
        name="operation"
        value={selectOption}
        onChange={(event) => {
          setSelectOption(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;

/* - - - COMMENTED STEPS - - -
 * import {usestate}
 * set userInput & setUserInput state
 * set state for select option
 * add select state to select tag value
 * for the onChange property anonymous fn to setSelectOption state so it can get the value of the selected option
 * create fn to handle user input
 * create function to handle submitted input
 *  - event as param setResult state as converteduserinput fn passing in user input and select option as params
 *  - if convertUserInput fn does not get invalid input then remove error class from select and input and use reset form fn to clear the form - else toggle error class from select and input
 * in form tag, add anonymous fn to use the handleSubmit fn to onClick prop
 * in the input tag, add value and onChange property
 *  - value set to userInput state
 *  - onChange set to an anonymous function that uses handleUserInput fn
 * created fn to convert userInput
 *  - takes in the input and option as parameters
 *  - created a numArr splitting the input given
 *  - created a variable for total to equal reduce fn with num and acc adding the numbers together
 *  - if statemenet if the total is NaN or input black or option black to returning error msg
 *  - if option value = sum return total
 *  - if option value = average returns total divided by the size of arr
 *  - if option value = mode
 *    * created a modeObj to hold the number and frequency of the number
 *    * used map fn to check each number - if the number is not in mode Obj add it as a key and add the value as 1 - else if it is already in modeObj then give that number key (the value + 1) as a new value
 *    * then assigned freqVal 0 and numKey as vars
 *    * used a for/in loop to check thru each key in modeObj - if the value of modeObj at the key is greater than freqVal then make that the new freqVal value and the key value as num key; once it checks every number the most frequent number will be in numKey and return that num
 * created a fn to resetForm fn to reset userInput and option fields to blank
 *
 * --- BONUS ---
 * queryselected select and input to toggle and remove error class
 * reset form FN to clear when input correct
 */
