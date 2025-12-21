

import { useContext } from 'react'
import { Appcontext } from '../Context/AppContex'
import Component4 from "./Component4";

const Component3=()=> {
    const {a,b}=useContext(Appcontext);

  return (
    <>
        <h3>This is  prop a:{a}</h3>
        <h3>This is  prop b:{b}</h3>
        <Component4/>
    </>
    
  )
}

export default Component3
