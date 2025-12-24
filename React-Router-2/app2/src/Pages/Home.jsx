


import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (


    
    <>
   
      <div style={styles.container}>
      <h1 style={styles.heading}>This is Home Page</h1>

      <button
        style={styles.button}
        onClick={() => navigate('/login')}
      >
        Admin Login
      </button>
    </div>

    </>


  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  heading: {
    color: "#ffffff",
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "600"
  },
  button: {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#ff9800",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
  }
};

export default Home;
