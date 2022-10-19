import React from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => console.log(e);

  return (
    <div className="App">
      <h1>Calculate your Percentage based off of 1RM</h1>
      <Input onChange={handleChange} />
    </div>
  );
}

export default App;
