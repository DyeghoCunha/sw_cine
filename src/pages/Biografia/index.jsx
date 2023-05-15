import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import styles from './Biografia.module.scss';
import listas from '../../json/lista.json'
import React from 'react'
import NaoEncontrada from '../NaoEncontrada';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function Biografia() {

  const parametros = useParams();
  const lista = listas.find((lista) => {
    return lista.id === Number(parametros.id)
  })

  if (!lista) {
    return <NaoEncontrada />
  }
  return (
    <>
      <Banner imagem="videos" />
      <Titulo>
        <h1>{lista.titulo}</h1>
      </Titulo>
      <div className={styles.biografiaContainer}>
        <div className={styles.bioagrafia}>
        <ReactMarkdown>
          {lista.descricao}
        </ReactMarkdown>
        </div>  
        <h1 className={styles.fotoPersonagem}>{lista.foto}</h1>
        <h1>{lista.planeta}</h1>
      </div>

    </>
  )
}