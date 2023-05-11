import styles from './Container.module.scss'


import React from 'react'

export default function Container({children}) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}
