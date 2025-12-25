import React, { useReducer } from "react";
import { FormReducer, initialState } from "../Reducers/FormReducer";

const MultiForm = () => {
  const [state, dispatch] = useReducer(FormReducer, initialState);
  const { Step, FormData, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <>
        <h2>Form Submitted Successfully</h2>
        <h3>Name: {FormData.name}</h3>
        <h3>Email: {FormData.email}</h3>
        <h3>UserName: {FormData.userName}</h3>
        <h3>Password: {FormData.password}</h3>

        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset
        </button>
      </>
    );
  }

  return (
    <div>
      <h2>Step {Step}</h2>

      {Step === 1 && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={FormData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={FormData.email}
            onChange={handleChange}
          />
        </>
      )}

      {Step === 2 && (
        <>
          <input
            type="text"
            name="userName"
            placeholder="Enter your Username"
            value={FormData.userName}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={FormData.password}
            onChange={handleChange}
          />
        </>
      )}

      <div style={{ marginTop: "10px" , teaxAlign:"center" ,}}>
        {Step > 1 && (
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
        )}

        {Step < 2 && (
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        )}

        {Step === 2 && (
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiForm;
