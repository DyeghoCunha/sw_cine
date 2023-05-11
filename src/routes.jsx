

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Cabecalho from './components/Cabecalho'
import Banner from './components/Banner'
import Favoritos from './pages/Favoritos'
import Rodape from './components/Rodape'
import Container from './components/Container'

import Colecionavel from './pages/Colecionavel'
import FavoritosProvider from './components/context/Favoritos'


export default function AppRoutes() {
  return (

    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>

          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/favoritos' element={<Favoritos />}></Route>
          </Routes>
          
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}
