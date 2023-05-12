import React from 'react'

import styles from './PokedexIcone.module.scss'
import { Link } from 'react-router-dom'

export default function PokedexIcone({id,icone}) {
  return (
        <Link to='/' className={styles.btnIconeContainer}>
          <img id={id} className={styles.icone} src={`${icone}`} alt="" />
          {console.log(icone)}
        </Link>
  )
}
