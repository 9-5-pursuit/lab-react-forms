import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form result={result} setResult={setResult} />
      <section id="result">
        <p>{result}</p>
      </section>
    </main>
  );
}

export default App;

/* - - - COMMENTED STEPS - - -
 * import {useState} (line 6)
 * set for results to result & setResult state (line 11)
 * added result section under form component for readability (line 12)
 * added result state to p tag in result section (line 13)
 */
