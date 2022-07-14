import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [counter, setCounter] = useState(0)

  const handlePlus =()=>{
    setCounter(counter+1)
  }
  const handleMinus =()=>{
    setCounter(counter-1)
  }
  return (
    <div>
      <h1>Git progect</h1>
      <div>{counter}</div>
      <Button handleClick={handleMinus}>-</Button>
      <Button handleClick={handlePlus}>+</Button>
    </div>
  );
}

export default App;
