
import { IconesContext } from '../../context/Icones';
import iconeSw from '../image/mando.png'

import styles from './PlacarSmall.module.scss'
import React, { useContext } from 'react'

export default function PlacarSmall({ icone }) {
  const { contador } = useContext(IconesContext);

  let score = contador -1;

  return (

    <div className={styles.placarContainer}>
      <img className={styles.iconeMando} src={iconeSw} alt="" />
      <div className={styles.placarFlutuante}>
      <h2 className={styles.score}>{score}</h2>
      </div>
    </div>
  )
}
