

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Cabecalho from './components/Cabecalho'

import Favoritos from './pages/Favoritos'
import Rodape from './components/Rodape'
import Container from './components/Container'

import FavoritosProvider from './components/context/Favoritos'
import Player from './pages/Player'
import NaoEncontrada from './pages/NaoEncontrada'
import Pokedex from './components/Pokedex'
import Biografia from './pages/Biografia'
import IconesProvider from './components/context/Icones'




export default function AppRoutes() {
  return (

    <BrowserRouter>
      <Cabecalho />

      <Container>
        <IconesProvider>
          <FavoritosProvider>
            <Pokedex />
            <Routes>
              <Route path='/' element={<Inicio />}></Route>
              <Route path='/favoritos' element={<Favoritos />}></Route>
              <Route path='/:id' element={<Player />}></Route>
              <Route path='*' element={<NaoEncontrada />}></Route>
              <Route path='/biografia/:id' element={<Biografia />}></Route>
            </Routes>
          </FavoritosProvider>
        </IconesProvider>
      </Container>

      <Rodape />
    </BrowserRouter>
  )
}
