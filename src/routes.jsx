

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Cabecalho from './components/Cabecalho'
import Banner from './components/Banner'

export default function AppRoutes() {
  return (

    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}
