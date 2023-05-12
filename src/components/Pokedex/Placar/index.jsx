import PokedexIcone from '../PokedexIcone'
import styles from './Placar.module.scss'

import React from 'react'

export default function Placar({ icone, score }) {
  return (

    <div className={styles.placarContainer}>
      <PokedexIcone icone={icone} />
      <h2 className={styles.score}>{score}</h2>
    </div>
  )
}
