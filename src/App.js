import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [selectOption, setSelectOption] = useState("");

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form
        selectOption={selectOption}
        // handleSelectChange={handleSelectChange}
      />
    </main>
  );
}

export default App;
