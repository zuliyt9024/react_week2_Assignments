import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      navigate('/todo');
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>This is Login </h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>


         <div>
     <p>Emiail:admin@gmail.com</p> 
     <p>password:1234</p>
    </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  form: {
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Login;
