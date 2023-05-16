import Banner from '../../components/Banner';

import Card from '../../components/Card';


import Titulo from '../../components/Titulo';
import videos from '../../json/db.json'
import styles from './Inicio.module.scss'


import React, { useEffect, useState } from 'react'

export default function Inicio() {

  //Parte do codigo incluida para usar com o MY JSON SERVER
  /*
  const [videos, setVideos] = useState([]);
   useEffect(() => {
    fetch("https://my-json-server.typicode.com/dyeghocunha/swcine.api/videos")
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, []) */

  return (
    <>

      <Banner imagem="home" />
      <Titulo>
        <h1>Um Lugar para Guardar seus vídeos e filmes!</h1>
      </Titulo>

      {/* Mapear o arquivo JSON  */}

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
      {/* FIM DO MAPA */}


    </>
  )
}
