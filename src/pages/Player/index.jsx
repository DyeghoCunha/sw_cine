import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import styles from './Player.module.scss';
import videos from '../../json/db.json'
import React from 'react'
import NaoEncontrada from '../NaoEncontrada';

export default function Player() {

  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id)
  })
  
if(!video){
  return <NaoEncontrada/>
}

  return (
    <>
      <Banner imagem="videos" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="50%"
          height="50%"
          src={video.link}
          title={`${video.titulo} ${video.subtitulo} `}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </section>
    </>
  )
}
