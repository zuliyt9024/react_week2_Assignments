
import React from 'react'
import Login from './Pages/Login'
import Navbar from "./Components/Navbar"

import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Todos from './Pages/Todos';


function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todos />} />

      </Routes>
    </div>
  );
}

export default App;

