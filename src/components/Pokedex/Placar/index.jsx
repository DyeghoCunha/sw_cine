
import { IconesContext } from '../../context/Icones';
import PokedexIcone from '../PokedexIcone';
import iconeSw from '../image/mando.png'

import styles from './Placar.module.scss'
import React, { useContext } from 'react'

export default function Placar({ icone }) {
  const { contador } = useContext(IconesContext);

  let score = contador -1;

  return (

    <div className={styles.placarContainer}>
      <PokedexIcone icone={iconeSw} />
      <h2 className={styles.score}>{score}</h2>
    </div>
  )
}
