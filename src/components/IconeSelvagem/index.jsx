

import React from 'react'
import styles from './IconeSelvagem.module.scss'
import IconeGenerico from '../IconeGenerico'
import lista from '../../json/lista.json'



export default function IconeSelvagem({ id, icone, titulo, foto, descricao, planeta }) {


  /* Posicao Aleatoria e Icone Aleatorio */
  const randomIndex = Math.floor(Math.random() * lista.length + 1);

  const aleatorioLeft = Math.floor(Math.random() * window.innerWidth)
  const aleatorioTop = Math.floor(Math.random() * window.innerHeight)
  const left = `${aleatorioLeft}.px`
  const top = `${aleatorioTop}.px`
  /* Posicao Aleatoria e Icone Aleatorio */
  return (

    <div className={styles.iconeSelvagem}>
      <IconeGenerico
        key={randomIndex}
        left={left}
        top={top}
        icone={`https://raw.githubusercontent.com/DyeghoCunha/sw_cine/master/src/components/Pokedex/image/startwars${randomIndex}.png`}
        id={randomIndex}
      />
    </div>


  )
}
