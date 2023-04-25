import React, { useState } from "react";
import "./Form.css";

function Form() {
    const [request, setReq] = useState({
        values: "",
        operation: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        let numbers = request.values.split(",");
        let error = false;
        let results = document.getElementById("result");
        let inputValues = document.getElementById("values");
        let inputOps = document.getElementById("operation");
        if (request.operation === "sum") {
            let nums = 0;
            numbers.map((e) => {
                if (e === "") {
                    error = true;
                } else {
                    nums += Number(e);
                }
            });
            if (error || isNaN(nums)) {
                inputValues.className = "error";
                inputOps.className = "error";
                results.innerHTML = "Invalid input.";
            } else {
                results.innerHTML = nums;
                inputValues.className = "";
                inputOps.className = "";
                inputValues.value = "";
                inputOps.value = "";
            }
        } else if (request.operation === "average") {
            let nums = 0;
            numbers.map((e) => {
                if (e === "") {
                    error = true;
                } else {
                    nums += Number(e);
                }
            });

            if (error || isNaN(nums)) {
                inputValues.className = "error";
                inputOps.className = "error";
                results.innerHTML = "Invalid input.";
            } else {
                results.innerHTML = nums / numbers.length;
                inputValues.className = "";
                inputOps.className = "";
                inputValues.value = "";
                inputOps.value = "";
            }
        } else if (request.operation === "mode") {
            let countNum = {};
            numbers.forEach((e) => {
                if (e === "") {
                    error = true;
                } else {
                    if (countNum[e]) {
                        countNum[e]++;
                    } else {
                        countNum[e] = 1;
                    }
                }
            });
            let highest = 0;
            for (let key in countNum) {
                if (isNaN(key)) {
                    error = true;
                } else {
                    if (highest === 0) {
                        highest = key;
                    } else {
                        if (countNum[highest] < countNum[key]) {
                            highest = key;
                        }
                    }
                }
            }
            if (error) {
                inputValues.className = "error";
                inputOps.className = "error";
                results.innerHTML = "Invalid input.";
            } else {
                results.innerHTML = highest;
                inputValues.className = "";
                inputOps.className = "";
                inputValues.value = "";
                inputOps.value = "";
            }
        } else {
            inputValues.className = "error";
            inputOps.className = "error";
            results.innerHTML = "Invalid input.";
        }
    }
    function handleTextChange(e) {
        //     console.log("name: ", e.target.name);
        //     console.log("id: ", e.target.id);
        setReq({ ...request, [e.target.name]: e.target.value });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    id="values"
                    name="values"
                    type="text"
                    value={request.values}
                    onChange={handleTextChange}
                />
                <select
                    id="operation"
                    name="operation"
                    onChange={handleTextChange}
                    value={request.operation}
                >
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
