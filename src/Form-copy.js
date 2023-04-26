import { useState } from "react";
import "./Form.css";

// 1. Handle form submit and form inputs
// 2. Convert input value array, array values into numbers

function Form() {
  return (
    <>
      <form>
        <input id="values" name="values" type="text" value={values} />
        <select id="operation" name="operation" value={operation}>
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
