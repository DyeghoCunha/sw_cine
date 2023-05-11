import styles from './Card.module.scss';
import iconeFavoritar from './favoritar.png'

import React from 'react'

export default function Card({id,titulo,subtitulo,capa}) {


  return (
    <div className={styles.cardContainer}>

      <div className={styles.card}>
        <div className={styles.tituloContainer}>
          
          <h2 className={styles.titulo}>{titulo}</h2>
          
          <img src={iconeFavoritar} className={styles.favorito} />

        </div>

        <img className={styles.cardFoto} url={`https://github.com/DyeghoCunha/sw_cine/blob/master/src/assets/imagem/sw-cards/1.png`} alt="" />

        <h3 className={styles.subTitulo}>{subtitulo}</h3>







      </div>

    </div>
  )
}
