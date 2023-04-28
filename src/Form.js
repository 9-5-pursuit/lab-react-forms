import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [num, setNum] = useState({
    values: "",
    operation: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(num);
    // handleReset();

    let numArr = num.values.trim().split(",");
    let result = document.querySelector("section#result");
    const selectTag = document.querySelector("select");
    const inputTag = document.querySelector("input");

    //create a default for the error message
    let error = false;

    if (num.operation === "sum") {
      let numArraySum = 0;
      numArr.forEach((ele) => {
        if (ele === "" || isNaN(ele) === true) {
          error = true;
        } else {
          numArraySum += Number(ele);
        }
      });
      if (error === true) {
        inputTag.setAttribute("class", "error");
        selectTag.setAttribute("class", "error");
        result.innerHTML = "Invalid input.";
      } else {
        result.innerHTML = numArraySum;
        inputTag.removeAttribute("class");
        selectTag.removeAttribute("class");
        handleReset();
      }
    } else if (num.operation === "average") {
      let numArraySum = 0;
      numArr.forEach((ele) => {
        if (ele === "" || isNaN(ele) === true) {
          error = true;
        } else {
          numArraySum += Number(ele);
        }
      });
      if (error === true) {
        inputTag.setAttribute("class", "error");
        selectTag.setAttribute("class", "error");
        result.innerHTML = "Invalid input.";
      } else {
        let avgNum = numArraySum / numArr.length;
        result.innerHTML = avgNum;
        inputTag.removeAttribute("class");
        selectTag.removeAttribute("class");
        handleReset();
      }
    } else if (num.operation === "mode") {
      let modeObj = {};
      let mostFreq = 0;
      numArr.forEach((ele) => {
        if (ele === "" || isNaN(ele) === true) {
          error = true;
        } else {
          if (modeObj[ele]) {
            modeObj[ele]++;
          } else {
            modeObj[ele] = 1;
          }
        }
      });
      if (error === true) {
        inputTag.setAttribute("class", "error");
        selectTag.setAttribute("class", "error");
        result.innerHTML = "Invalid input.";
      } else {
        for (let key in modeObj) {
          if (mostFreq === 0) {
            mostFreq = key;
          } else {
            if (modeObj[mostFreq] < modeObj[key]) {
              mostFreq = key;
              inputTag.removeAttribute("class");
              selectTag.removeAttribute("class");
              handleReset();
            }
          }

          // console.log(mode, modeObj[mode]);
        }
        result.innerHTML = mostFreq;
      }
    } else {
      inputTag.setAttribute("class", "error");
      selectTag.setAttribute("class", "error");
      result.innerHTML = "Invalid input.";
    }
  }

  function handleTextChange(e) {
    setNum({
      ...num,
      [e.target.id]: e.target.value,
    });
  }

  function handleReset() {
    setNum({
      values: "",
      operation: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={num.values}
          onChange={handleTextChange}
        />
        <select
          id="operation"
          name="operation"
          value={num.operation}
          onChange={handleTextChange}
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
