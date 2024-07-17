import "./App.css";
import { useState } from "react";
import React from 'react';
import InputBox from "./InputBox";
import useFetchData from "./FetchData";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [convertAmount, setConvertAmount] = useState();

  const data = useFetchData(from);
  console.log("Fetched data:", data);

  const key = Object.keys(data);

  const swap = () => {
    
    setFrom(to);
    setTo(from);
    setAmount(convertAmount)
    setConvertAmount(amount)
  };
  const convert = () => {
    setConvertAmount(data[to]["value"] * amount);
    console.log("Converted Amount:", convertAmount);
  };
console.log(to)
  return (
    <div>
      <div>
        <h1>Currency Converter</h1>
        <InputBox
          options={key}
          amount={amount}
          onchangeAmount={(amount)=>setAmount(amount)}
          onchangeSelectOption={key=>setFrom(key)}
          selectOption={from}

        />
        <button onClick={swap}>Swap</button>
        <InputBox
          options={key}
          amount={convertAmount}
          onchangeSelectOption={key=>setTo(key)}
          selectOption={to}
          onchangeAmount={(amount)=>setAmount(amount)}
        />
        {<button onClick={convert}>Convert</button>}
      </div>
    </div>
  );
}

export default App;
