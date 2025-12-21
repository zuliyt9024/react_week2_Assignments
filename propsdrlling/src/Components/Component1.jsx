import React from 'react'
import { AppContext } from '../Context/AppContex'
import Component2 from './Component2'

function Component1() {
  const data = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
    f: 60,
  }

  return (
    <AppContext.Provider value={data}>
      <h3>Component1 provider(1)</h3>
      <Component2 />
    </AppContext.Provider>
  )
}

export default Component1
