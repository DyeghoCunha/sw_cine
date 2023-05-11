import { Link } from 'react-router-dom'
import BotaoFoguete from '../../components/Foguete'
import styles from './NaoEncontrada.module.scss'


import React from 'react'

export default function NaoEncontrada() {
  return (
    <section className={styles.container}>
      <h1>Ops!</h1>
      <p>O Conteudo que voce procura nao foi encontrado!</p>
      <div className={styles.foguete}>
        <Link to={'/'}>
        <BotaoFoguete />
        </Link>
      </div>
    </section>
  )
}
