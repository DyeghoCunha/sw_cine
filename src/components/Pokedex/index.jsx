import styles from './Pokedex.module.scss'
import boba from '../../assets/imagem/icons/icons/1626610_boba_mandalorian_hunter_bounty_star wars_boba_fett_bounty_star wars_mandalorian_hunter_fett.png'
import yoda from '../../assets/imagem/icons/icons/1626636_yoda_master_star wars_puppet_jedi.png'
import lista from './json/lista.json'

import React, { useState } from 'react'
import PokedexIcone from './PokedexIcone'
import Placar from './Placar'
import IconeGenerico from '../IconeGenerico'

export default function Pokedex() {
  const [contador, setContador] = useState(0);

  const handleIconClick = () => {
    setContador(contador + 1);
    console.log(contador)
  }
  return (
    
    <section className={styles.container} >
      <Placar score={contador} icone={boba} />

      <div className={styles.iconesContainer}>
        {/* Formula para pegar informacoes de mapa de um JSON */}
        {lista.map((lista) => { return <PokedexIcone {...lista} key={lista.id}  /> })}
        {/* ------------------------------------------------- */}
      </div>
      
    </section>
  )
}




