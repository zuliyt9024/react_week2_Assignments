import React, { useEffect, useState } from 'react'
import axios from "axios"

function Todo() {

  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      )
      setData(res.data)
    } catch (error) {
      console.log("fetch api error")
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        This is Todo Page
      </h1>

      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          listStyle: 'none',
          padding: 0
        }}
      >
        {data.map((suhani) => (
          <li
            key={suhani.id}
            style={{
              backgroundColor: '#f8fafc',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <h4 style={{ marginBottom: '10px', color: '#0f172a' }}>
              Title: {suhani.title}
            </h4>

            <p
              style={{
                fontWeight: 'bold',
                color: suhani.completed ? 'green' : 'red'
              }}
            >
              Status: {suhani.completed ? 'Completed' : 'Not Completed'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
