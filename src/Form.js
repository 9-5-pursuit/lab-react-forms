import React from "react";
import { useState } from "react";
import "./Form.css";



function HandleNumbersInput(e){

  const [number, setNumber] = useState()
  setNumber(e.target.value)
console.log(e.target.value);
}

function HandleOperation(e){
  const [option, setOption] = useState("")
  const [number, setNumber] = useState()

  setOption(e.target.value)

  if (option === "sum"){
    setNumber(e.target.value.split(","))

    
  }

  if (option === "average"){
    setNumber(e.target.value.split(","))

  }


  

  console.log(option)
}


function Form() {
  return (
    <>
      <form>
        <input id="values" name="values" type="text" onChange={HandleNumbersInput}/>
        <select id="operation" name="operation" onChange={HandleOperation}>
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
