import { useState } from "react";
import "./App.css";

export default function App() {
  // Simple Counter
  const [count, setCount] = useState(0);

  // Complex Counter
  const [complexCount, setComplexCount] = useState(0);
  const [done, setDone] = useState(false);

  const handleComplexAdd = () => {
    const newCount = complexCount + 1;
    setComplexCount(newCount);
    if (newCount >= 5) setDone(true);
  };

  const handleComplexSubtract = () => {
    const newCount = complexCount - 1;
    setComplexCount(newCount);
    if (newCount < 5) setDone(false);
  };

  const resetComplex = () => {
    setComplexCount(0);
    setDone(false);
  };

  return (
    <div className="container">
      {/* Simple Counter */}
      <h2>SIMPLE COUNTER</h2>
      <div className="counter-row">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className="reset-btn" onClick={() => setCount(0)}>Reset!</button>

      {/* Complex Counter */}
      <h2>COMPLEX COUNTER</h2>
      <div className="counter-row">
        <button onClick={handleComplexSubtract}>-</button>
        <span>{complexCount}</span>
        <button onClick={handleComplexAdd}>+</button>
      </div>
      {done && <div className="done-text">done!</div>}
      <button className="reset-btn" onClick={resetComplex}>Reset!</button>
    </div>
  );
}
