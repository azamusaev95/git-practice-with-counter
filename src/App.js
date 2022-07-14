import "./App.css";
import Button from "./components/Button/Button";

function App() {
  function handleClick() {}
  return (
    <div>
      <h1>Git progect</h1>
      <div>0</div>
      <Button handleClick={handleClick}>-</Button>
      <Button handleClick={handleClick}>+</Button>
    </div>
  );
}

export default App;
