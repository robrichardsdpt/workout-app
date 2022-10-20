import React from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  const handleChange = (event: { target: HTMLInputElement }) =>
    console.log(event.target.name, event.target.value);

  return (
    <div className="App">
      <h1>Calculate your Percentage based off of 1RM</h1>
      <Input
        tabIndex={0}
        required={true}
        inputName="percentage"
        onChange={handleChange}
      />
      <Input required={true} inputName="weight" onChange={handleChange} />
      <Button className="primary" onClick={() => console.log("button 1 click")}>
        Button
      </Button>
      <Button
        className="secondary"
        onClick={() => console.log("button 2 click")}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
