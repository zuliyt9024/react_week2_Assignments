
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Todo from './Pages/Todo'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import NoutFound from './Pages/NoutFound'

function App() {
  return (
    <div>

<Navbar/>
<Routes>
<Route path='/home' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/todo' element={<Todo/>} />

<Route path='*' element={<NoutFound/>} />


</Routes>
      
    </div>
  )
}

export default App
