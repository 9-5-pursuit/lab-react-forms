import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [result, setResult] = useState("");
  //const [numArr, setNumArr] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [operation, setOperation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setResult("");
    if (operation === "") {
      setResult("Invalid input.");
    } else if (userInput === "") {
      setResult("Invalid input.");
    } else {
      // console.log(userInput);
      const formattedInput = formatter(userInput);
      if (formattedInput === "invalid") {
        setResult("Invalid input.");
      } else {
        // console.log(formattedInput);
        // console.log(operation);

        setResult(handleOperations(formattedInput));
      }
    }
    handleReset();
  }
  function formatter(str) {
    //console.log(str);
    if (str === "") {
      return "invalid";
    } else {
      let localStr = str.split(",");
      let update = localStr.map((item) => {
        let localItem = Number(item);
        return localItem;
      });
      //console.log(update);
      //console.log(typeof update[0]);
      if (update.includes(NaN)) {
        return (localStr = "invalid");
      } else {
        return update;
      }
    }
  }
  function handleReset() {
    setUserInput("");
    setOperation("");
  }
  function handleOperations(arr) {
    let localArr = arr;
    let localResult;
    if (operation === "sum") {
      console.log("initiate sum");
      localResult = localArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    } else if (operation === "average") {
      console.log("initiate average");
      localResult = localArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      localResult = localResult / localArr.length;
    } else {
      console.log("initiate mode");
      //console.log(localArr);
      localArr = localArr.sort((a, b) => a - b);
      const counterObj = {};
      localArr.forEach((number) => {
        !counterObj[number]
          ? (counterObj[number] = 1)
          : (counterObj[number] += 1);
      });
      //----------------------//
      let highestNum = 0;
      let highestNumKey = -Infinity;

      for (let prop in counterObj) {
        const value = counterObj[prop];
        if (value > highestNum) {
          highestNum = value;
          highestNumKey = prop;
        }
      }
      localResult = Number(highestNumKey);
    }
    return localResult;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <select
          id="operation"
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
// console.log(startStr, operation);
//   let localOperation = operation;
//   let localStartStr = startStr;
//   formatter(localStartStr);

//   //setOperation(e.target[1].value);
//console.log(e.target[1].value);
// console.log(operation);
// console.log(startStr);
// let newNums = startStr;
// newNums = formatArr(newNums.split(","));
// // setOperation(e.target[1].value);
// // console.log(operation);
// //handleOperation(numArr);
// console.log(newNums);
// setNumArr([...numArr, newNums]);

// console.log(numArr);

// function handleOperation(arr) {
//   if (!operation) {
//     setResult("Invalid Input");
//   }
//   let total = 0;
//   if (operation === "sum") {
//     arr.reduce((previous, current) => previous + current, total);
//     setResult(total);
//   } else if (operation === "average") {
//     arr.reduce((previous, current) => previous + current, total);
//     setResult(total / arr.length);
//   } else if (operation === "mode") {
//   }
// }

// function formatArr(arr) {
//   console.log(arr);

//   const fullArray = [...arr];

//   console.log(fullArray);
//   const newArray = fullArray.map((element) => {
//     return parseFloat(element);
//   });
//   console.log(newArray);
//   setNumArr([...newArray]);
//   console.log(numArr);
//   if (newArray.includes(NaN)) {
//     setResult("Invalid Input");
//   } else {
//     return newArray;
//   }
// }
