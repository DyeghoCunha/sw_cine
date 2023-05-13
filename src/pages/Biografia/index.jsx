import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import styles from './Biografia.module.scss';
import listas from '../../components/Pokedex/json/lista.json'
import React from 'react'
import NaoEncontrada from '../NaoEncontrada';

export default function Biografia() {

  const parametros = useParams();
  const lista = listas.find((lista) => {
    return lista.id === Number(parametros.id)
  })
  
if(!lista){
  return <NaoEncontrada/>
}
  return (
    <>
      <Banner imagem="videos" />
      <Titulo>
        <h1>{lista.titulo}</h1>
      </Titulo>
      <h1>{lista.descricao}</h1>
      <h1>{lista.foto}</h1>
      <h1>{lista.planeta}</h1>
      
 </>
  )
}