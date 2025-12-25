import React from "react";
import { useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increment = () => {
    setCounterOne(counterOne + 1);
  };

  const decrement = () => {
    setCounterTwo(counterTwo - 1);
  };

  

  return (
    <>
       <div>
      <h3>Counter Example</h3>
     
        <button onClick={increment}>CounterOne = {counterOne}</button>
      </div>

      <div>
       <h2>Counter Example2</h2>
        <button onClick={decrement}>CounterTwo = {counterTwo}</button>
        </div>
    </>
    
  );
}

export default Counter;
