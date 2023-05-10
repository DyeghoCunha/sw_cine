import styles from './Card.module.scss';
import foto from '../../assets/imagem/sw-cards/1.png'
import icone from '../../assets/imagem/swCine_fav_Off.png'

import React from 'react'

export default function Card({titulo,subtitulo,capa}) {


  return (
    <div className={styles.cardContainer}>

      <div className={styles.card}>
        <div className={styles.tituloContainer}>
          <h2 className={styles.titulo}>{titulo}</h2>
          <img src={icone} className={styles.favorito} />
        </div>

        <img className={styles.cardFoto} src={foto} alt="" />

        <h3 className={styles.subTitulo}>A Ameaça Fantasma teste teste teste</h3>







      </div>

    </div>
  )
}
