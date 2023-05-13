import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import styles from './Player.module.scss';
import videos from '../../json/db.json'
import React from 'react'
import NaoEncontrada from '../NaoEncontrada';
import IconeGenerico from '../../components/IconeGenerico';
import iconeSw from '../../assets/imagem/icons/icons/1626628_skywalker_jedi_luke_star wars.png'
import IconeSelvagem from '../../components/IconeSelvagem';

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
        <h1>{`${video.titulo}: ${video.subtitulo} `}</h1>
      </Titulo>

    <IconeSelvagem/>
      
      <section className={styles.container}>
        <div className={styles.historiaContainer}>
          <p className={styles.historia}>{video.historia}</p>
        </div>
        <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={`${video.titulo} ${video.subtitulo} `}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
        </div>
      </section>
    </>
  )
}
