import styles from './Titulo.module.scss'

import React from 'react'

export default function Titulo({children}) {
  return (
    <div className={styles.texto}>
      {children}
    </div>
  )
}



