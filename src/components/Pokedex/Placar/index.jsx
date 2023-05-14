
import PokedexIcone from '../PokedexIcone';
import iconeSw from '../image/startwars2.png'

import styles from './Placar.module.scss'
import React from 'react'

export default function Placar({ icone, score }) {

  return (

    <div className={styles.placarContainer}>
      <PokedexIcone icone={iconeSw} />
      <h2 className={styles.score}>{score}</h2>
    </div>
  )
}
