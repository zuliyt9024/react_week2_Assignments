import React, { useCallback, useState } from 'react'
import Title from './Title';
import Button from './Button';
import Count from './Count';

function ParentComponent() {

  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(80000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "2px solid #583e9bff",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <Title />

      <div style={{ marginBottom: "20px" }}>
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
      </div>

      <div>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
      </div>
    </div>
  );
}

export default ParentComponent;
