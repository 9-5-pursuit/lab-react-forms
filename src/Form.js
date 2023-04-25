import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [request, setRequest] = useState({
    values: "",
    operation: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    // .trim() will get rid of empty spaces and this helps make sure variable is not blank (aka filled in with empty spaces via spacebars)
    let numsArr = request.values.trim().split(",");
    let result = document.querySelector("section#result");
    const inputTag = document.querySelector("input");
    const selectTag = document.querySelector("select");

    // Create an error variable to equal false to start and depending on the input it can be changed to true. This will determine whether we display an error message or not.
    let error = false;

    if (request.operation === "sum") {
      let sumNums = 0;
      numsArr.map((element) => {
        if (element === "" || isNaN(element) === true) {
          error = true;
        } else {
          sumNums += Number(element);
        }
      });
      if (error === true) {
        inputTag.setAttribute("class", "error");
        selectTag.setAttribute("class", "error");
        result.innerHTML = "Invalid input.";
      } else {
        result.innerHTML = sumNums;
        inputTag.removeAttribute("class");
        selectTag.removeAttribute("class");
        handleReset();
      }

      console.log(error);

      // result.innerHTML = sumNums;
    } else if (request.operation === "average") {
      let sumNums = 0;
      let average;
      numsArr.map((element) => {
        if (element === "" || isNaN(element) === true) {
          error = true;
        } else {
          sumNums += Number(element);
        }
      });

      if (error === true) {
        inputTag.setAttribute("class", "error");
        selectTag.setAttribute("class", "error");
        result.innerHTML = "Invalid input.";
      } else {
        average = sumNums / numsArr.length;
        result.innerHTML = average;
        inputTag.removeAttribute("class");
        selectTag.removeAttribute("class");
        handleReset();
      }

      // average = sumNums / numsArr.length;
      // console.log(sumNums)
      // result.innerHTML = average;
    } else if (request.operation === "mode") {
      let modeObject = {};
      numsArr.forEach((element) => {
        if (element === "" || isNaN(element) === true) {
          error = true;
        } else {
          if (modeObject[element]) {
            modeObject[element] += 1;
          } else {
            modeObject[element] = 1;
          }
          console.log(modeObject);
        }
      });

      if (error === true) {
        inputTag.setAttribute("class", "error");
        selectTag.setAttribute("class", "error");
        result.innerHTML = "Invalid input.";
      } else {
        let highestNumber = 0;
        for (let key in modeObject) {
          // modeObject = {
          // 2: 3, --- first iteration
          // 3: 5, --- second iteration
          // 5:1  ---- third iteration
          // }

          // Object[key] = value
          if (highestNumber === 0) {
            highestNumber = key;
            // highestNumber = 2,  after 1st iteration
          } else {
            if (modeObject[highestNumber] < modeObject[key]) {
              highestNumber = key;
            }
          }
        }
        result.innerHTML = highestNumber;
        inputTag.removeAttribute("class");
        selectTag.removeAttribute("class");
        handleReset();
      }
    } else {
      inputTag.setAttribute("class", "error");
      selectTag.setAttribute("class", "error");
      result.innerHTML = "Invalid input.";
    }
    // handleReset();
  }

  function handleReset() {
    setRequest({
      values: "",
      operation: "",
    }); // Putting double quotes inside the parenthesis will allow us to reset the values
  }

  function handleTextChange(event) {
    setRequest({ ...request, [event.target.name]: event.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={request.values}
          onChange={handleTextChange}
        />
        <select
          onChange={handleTextChange}
          value={request.operation}
          id="operation"
          name="operation"
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
