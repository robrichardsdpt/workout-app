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
      <Input required={true} inputName="percentage" onChange={handleChange} />
      <Input required={true} inputName="weight" onChange={handleChange} />
      <Button className="primary">Button</Button>
      <Button className="secondary">Button</Button>
    </div>
  );
}

export default App;
