import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

// const [num, SetNum] = useState(0);

function App() {
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form />
    </main>
  );
}

export default App;
