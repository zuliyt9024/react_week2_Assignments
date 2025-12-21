import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContex'

function Component2() {
  const data = useContext(AppContext)

  return (
    <div>
      <h4>Component2</h4>
      <p>{data.a}</p>
    </div>
  )
}

export default Component2
