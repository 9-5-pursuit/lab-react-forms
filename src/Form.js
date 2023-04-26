import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [userInput, setuserInput] = useState("")
  const [selectOption, setselectOption] = useState("");
  const [result, setResult] = useState("");
  

  function simplifyNum(event){

    const num = event.target.value
    let split_num = num.split(",");
    let convertedArray = split_num.map(element => Number(element))
    setuserInput(convertedArray)
  }

  function handleSelectChange(e){
    setselectOption(e.target.value)
  }
  
  function sum(array){
    let total = 0;
      for(let element of array){
          total += element
      }
      setResult(total);
  }

  function average(array){
    let total = 0;
    let average;
    for(let element of userInput){
        total += element;
    }
    average = total/(userInput.length)
    setResult(average);
  }

  function mode(array){
    let new_obj = {}; 

    array.forEach(item => {
      if (!(new_obj.hasOwnProperty(item))) {
        new_obj[item] = 1
      }
      else {
        new_obj[item] += 1
      }  
    })

    let mode = null;
    let maxFrequency = -1;
    for (const num in new_obj){
      if (new_obj[num] > maxFrequency){
        mode = num;
        maxFrequency = new_obj[num]
      }
    }
    setResult(Number(mode));
  }
  
  function reset(){
    setuserInput("")
    setselectOption("")
  }

  function onSubmit(event){
    event.preventDefault();
    {
      (userInput ==="" || selectOption === "") && setResult("Invalid input.") 
      selectOption === "sum" && sum(userInput)
      selectOption === "average" && average(userInput)
      selectOption === "mode" && mode(userInput)
      
    }
    reset();
    
  }

  
  return (
    <>
      <form>
        <input id="values" name="values" type="text" value={userInput} onChange={simplifyNum} />
        <select id="operation" name="operation" value={selectOption} onChange={handleSelectChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={onSubmit}>Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
