import React from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  const handleChange = (event: { target: HTMLInputElement }) =>
    console.log(event.target.name, event.target.value);

  const handleClick = (num: number) => console.log(num);

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
      <Button className="primary" onClick={() => handleClick(1)}>
        Button 1
      </Button>
      <Button className="secondary" onClick={() => handleClick(2)}>
        Button 2
      </Button>
    </div>
  );
}

export default App;
