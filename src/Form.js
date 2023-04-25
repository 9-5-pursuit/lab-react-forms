import { useState } from "react";
import "./Form.css";

function Form() {
  const [select, setSelect] = useState("");
  const [numberArray, setNumberArray] = useState();
  const [result, setResult] = useState();
  const [inputClass, setInputClass] = useState();
  const [selectClass, setSelectClass] = useState();

  function handleSelectChange(event) {
    setSelect(event.target.value);
  }

  function handleNumberArray(event) {
    setNumberArray(event.target.value.split(","));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (
      select === "" ||
      numberArray.some((num) => {
        return isNaN(num);
      })
    ) {
      setResult("Invalid input.");
      setInputClass("error");
      setSelectClass("error");
    } else {
      if (select === "sum") {
        let sum = 0;
        numberArray.map((num) => {
          return (sum += parseInt(num));
        });
        setResult(sum);
      }
      if (select === "average") {
        let average = 0;
        numberArray.map((num) => {
          return (average += parseInt(num));
        });
        average = average / numberArray.length;
        setResult(average);
      }
      if (select === "mode") {
        let modeObj = {};
        let mode = numberArray[0];
        let maxCount = 1;

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
        setResult(mode);
      }
      setNumberArray("");
      setSelect("");
      setInputClass("");
      setSelectClass("");
    }
  }

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
