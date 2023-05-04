import React, {useState} from "react";
import "./Form.css";

//handle form submit and form inputs
// Converts input value into array, array value into numbers
// handle errors
//handle calculation
// handle interface



function Form() {
  const [values, setvalues] = useState("");
  const [Operation, setOperation] = useState("");
  const [ValidForm, setValidForm] = useState(true);
  const [Result, setResult] = useState(null)
  
  function convertToNumberArray() {
    console.log(values)
    console.log(values.split(","))
    console.log(values.split(",").map(value=> parseInt(value)))

   return values.split(",").map((value)=>parseInt(value))
  }

  function isValidForm(numbersArray){
      if(numbersArray.length ===0 ||Operation === "") return false;

      for (const number of numbersArray){
        if (isNaN(number)) return false;
      }
      return true;
  }
  function getMode(numbersArray){
    const sortedNumbers = numbersArray.sort();
    console.log(sortedNumbers);

    let max = 0;
    let counter = 0;
    let value = 0;

    for (let i = 0; i < sortedNumbers.length; i++){
      if (sortedNumbers[i] === sortedNumbers[i + 1]){
        counter++;
        if (counter>max){
          max= counter;
          value = sortedNumbers[i];
        }
      } else {
        counter = 0;
      }
    }
       return value;

  }

  function getSum(numbersArray){
    const sum = numbersArray.reduce((total, current)=>
    total + current, 0);
    return sum;


  }

  function getAverage(numbersArray){
    const sum = getSum(numbersArray);
    return sum/numbersArray.length;

  }

  function resetForm(){
    setvalues("");
    setOperation("");

  }
  function handleSubmit(event){
    event.preventDefault();
    setValidForm(true)
    const numbersArray = convertToNumberArray();

    // validation
    if(!isValidForm(numbersArray)){
      return setValidForm(false);
    }
    // handles operation
    if (Operation === "mode"){
      const mode = getMode(numbersArray);
      setResult(mode);
    }
    else if (Operation === "average"){
      const average = getAverage(numbersArray);
      setResult(average)
    }
    else if (Operation === "sum"){
      const sum = getSum(numbersArray);
      setResult(sum)
    }
    resetForm()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" className={!ValidForm && "error"} name="values" type="text" value={values} onChange={(event)=> setvalues(event.target.value)}/>
        <select id="operation" className={!ValidForm && "error"} name="operation" value={Operation} onChange={(event)=> setOperation(event.target.value)}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{ValidForm ? Result: "Invalid input."}</p>
      </section>
    </>
  );
}

export default Form;
