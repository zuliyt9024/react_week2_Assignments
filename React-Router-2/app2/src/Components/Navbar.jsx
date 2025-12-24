
import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import Login from '../Pages/Login';

function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        backgroundColor: '#554faaff',
        padding: '15px 0'
      }}
    >
      <NavLink to="/home" style={{ textDecoration: 'none' }}>
        <h3
          style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          Home
        </h3>
      </NavLink>

      <Link to="/login" style={{ textDecoration: 'none' }}>
        <h3
          style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
           Login
        </h3>
      </Link>

      <Link to="/todo" style={{ textDecoration: 'none' }}>
        <h3
          style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          Todo
        </h3>
      </Link>
    </div>
  )
}

export default Navbar
