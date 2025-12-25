import React from "react";
import Counter from "./Counter/Counter";
import input from 'react';
import { useState,useMemo } from "react";
import count from 'react'

function App() {

const[counterOne, setCounterOne] = useState(0);
const [input,setInput]=useState(0);
    // const [counterTwo, setCounterTwo] = useState(0);
  
    
    // const decrement = () => {
    //   setCounterTwo(counterTwo - 1);
    // };
  
  function Expancive(num) {
    console.log("Expansive  task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 3;
  }
  let doubleVlaue = useMemo(()=>Expancive(input),[input]);

 return(
  <div>
    <div>

    <div>Double:{doubleVlaue}</div>
      <input type="number" placeholder="Enter number" value={input}
          onChange={(e) => setInput(e.target.value)}
        />
    </div>
   
    <div>

<div>CounterOne:{counterOne}</div>

     <br></br><br></br>
      
        <button onClick={()=>setCounterOne(counterOne+1)}>Increment</button>
    </div><br></br>

     
     <div>
      {/* <h2>Counter Example2</h2> */}
       {/* <button onClick={decrement}>CounterTwo = {counterTwo}</button> */}
     </div>

  </div>

 )

  

    
      

  

    
    
        
  
}

export default App;
