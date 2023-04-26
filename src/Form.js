import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [operation, setOperation] = useState("");
  const [startStr, setStartStr] = useState("");
  const [result, setResult] = useState("");
  const [numArr, setNumArr] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    //setOperation(e.target[1].value);
    //console.log(e.target[1].value);
    console.log(operation);
    console.log(startStr);

    formatArr(startStr.split(","));
    // setOperation(e.target[1].value);
    // console.log(operation);
    handleOperation(numArr);

    console.log(numArr);
  }
  function handleOperation(arr) {
    if (!operation) {
      setResult("Invalid Input");
    }
    let total = 0;
    if (operation === "sum") {
      arr.reduce((previous, current) => previous + current, total);
      setResult(total);
    } else if (operation === "average") {
      arr.reduce((previous, current) => previous + current, total);
      setResult(total / arr.length);
    } else if (operation === "mode") {
    }
  }
  function handleSelectChange(e) {
    setOperation(e.target.value);
  }
  function handleTextChange(e) {
    setStartStr(e.target.value);
  }
  function formatArr(arr) {
    console.log(arr);
    const newArray = arr.map((element) => {
      return parseFloat(element);
    });
    console.log(newArray);

    if (newArray.includes(NaN)) {
      setResult("Invalid Input");
    } else {
      setNumArr(...numArr, newArray);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          onChange={handleTextChange}
        />
        <select id="operation" name="operation" onChange={handleSelectChange}>
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

//------------Funeral Pyre--------------//
//const [numArr, setNumArr] = useState([]);
// const [newNumOp, setNumOp] = useState({
//   numArray: [],
//   operation: "",
// const [result, setResult] = useState("");
// const [userOps, setOperation] = useState("");
// const [numArr, setNumArr] = useState([]);
//const [testStr, setStr] = useState("");

// });
// function resetStates() {
//   setResult("");
//   setUserOps("");
// }
/*
  function handleSubmit(e) {
    e.preventDefault();
    //resetStates();
    const userInput = e.target[0].value;
    const userOperation = e.target[1].value;

    formatArr([userInput.split(",")]);
    //setStr("Hit");
    //console.log(typeof testStr);
    setOperation(e.target[1].value);
    console.log(userOps);
    console.log(numArr);
    doMath(userOps, numArr);
  }
  function formatArr(str) {
    let paramArr = JSON.parse(JSON.stringify(str[0]));

    //console.log(paramArr);
    let localArr = [];
    //console.log(paramArr.length);
    paramArr.forEach((element) => {
      //console.log(element);
      localArr.push(parseFloat(element));
    });
    //console.log(localArr);
    setNumArr([localArr]);
    //console.log(numArr);
  }
  function doMath(operation, array) {
    console.log(array);
    console.log(operation);
    //ErrorHandling
    let total = 0;
    if (!operation) {
      return setResult("Invalid Input");
    }

    if (operation === "sum") {
      array.reduce((previous, current) => previous + current, total);
      console.log(total);
    } else if (operation === "average") {
      array.reduce((previous, current) => previous + current, total);
      total = total / array.length;
    }
    setResult(total);
  }
  */
//-----------------------------------------//
// function grabNumDetails(e) {
//   //console.log(e.target.value);
//   const newNumArr = e.target.value.split(",");
//   console.log(newNumArr);

//   //console.log(newNumArr);
//   //console.log(sumOperator(newNumArr));
//   // console.log(newVal);
// }
// function grabMethodDetails(e) {
//   //console.log(e.target.value);
//   //console.log(typeof e.target.value);
//   console.log(e.target.value);
// }
// function errorHandling(value) {}

// function sumOperator(array) {
//   const total = 0;
//   const sumMethod = array.reduce(
//     (previous, current) => Number(previous) + Number(current),
//     total
//   );
//   //console.log(sumMethod, array.length);
//   return sumMethod;
// }

// function handleReset() {
//   setNumOp({
//     numArray: [],
//     operation: "",
//   });
// }

// function handleTextChange(event) {
//   // console.log(event.target.value);
//   // console.log(event.target.id);
//   if (event.target.id === "operation") {
//     console.log(event.target.id + "The operation");
//     console.log(event.target.value);
//   } else if (event.target.id === "values") {
//     handleInputNums(event.target.value);
//     console.log(event.target.id + "The values");
//     console.log(event.target.value);
//   }

//   function handleInputNums(value) {
//     const intialNumArr = value.split(",");
//     let finalNumArr = [];
//     console.log(intialNumArr);
//     intialNumArr.forEach((element) => {
//       element = Number(element);
//       finalNumArr.push(Number(element));
//       console.log(element);
//       console.log(typeof element);
//     });
//     console.log(finalNumArr);
//   }
//   // if (event.target.id === "operartion") {
//   //   console.log(event.target.value);
//   //   const newNumArr = event.target.value;
//   //   console.log(newNumArr);
//   // const newNumArr = event.target.value.split(",");
//   // const formatArr = newNumArr.forEach((element) => {
//   //   element = Number(element);
//   //   console.log(typeof element);
//   // });

//   //console.log(Number(newNumArr));
//   //console.log(formatArr);
//   // } else {
//   //   console.log(event.target.value);
//   // }
// }
