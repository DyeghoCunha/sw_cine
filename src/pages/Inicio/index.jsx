import Banner from '../../components/Banner';

import Card from '../../components/Card';

import Titulo from '../../components/Titulo';
import videos from '../../json/db.json'
import styles from './Inicio.module.scss'


import React from 'react'

export default function Inicio() {


  return (
    <>
    
    <Banner imagem="home"/>
    <Titulo>
      <h1>Um Lugar para Guardar seus vídeos e filmes!</h1>
    </Titulo>
    
{/* Mapear o arquivo JSON  */}

    <section className={styles.container}>
      {videos.map((video)=>{
       return  <Card {...video} key = {video.id}/>
      })}
    </section>
{/* FIM DO MAPA */}

    
    </>
  )
}
