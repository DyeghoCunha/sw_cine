import React from 'react'

import styles from './PokedexIcone.module.scss'
import { Link } from 'react-router-dom'

export default function PokedexIcone({icone}) {
  return (
        <Link to='/' className={styles.btnIconeContainer}>
          <img className={styles.icone} src={`../image/${icone}.png`} alt="" />
        </Link>
  )
}
