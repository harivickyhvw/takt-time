import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [annualVol, setAnnualVol] = useState(0);
  const [taktTime, setTaktTime] = useState(null);
  const onSubmit = (event) => {
    event.preventDefault();
    if (annualVol > 0) {
      let answer = (12 * 25 * 8 * 3600) / annualVol;
      setTaktTime(answer.toFixed(2));
    }
  };
  return (
    <div className="App">
      <h1>Takt Time Calculator</h1>
      <h2>Enter Annual Volume</h2>
      <input
        type="number"
        value={annualVol}
        onChange={(event) => {
          setAnnualVol(event.target.value);
        }}
      ></input>
      <button class="button" onClick={(event) => onSubmit(event)}>
        OK
      </button>
      {taktTime && <h2>Takt Time in seconds : {taktTime} </h2>}
    </div>
  );
}
