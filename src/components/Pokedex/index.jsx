import styles from './Pokedex.module.scss'
import boba from '../../assets/imagem/icons/icons/1626610_boba_mandalorian_hunter_bounty_star wars_boba_fett_bounty_star wars_mandalorian_hunter_fett.png'
import yoda from '../../assets/imagem/icons/icons/1626636_yoda_master_star wars_puppet_jedi.png'
import lista from './json/lista.json'

import React from 'react'
import PokedexIcone from './PokedexIcone'
import Placar from './Placar'

export default function Pokedex() {

  
  return (
    <section className={styles.container}>
      <Placar score={30} icone="starwars1" />
    <div className={styles.iconesContainer}>
      <PokedexIcone icone="starwars1"/>
      <PokedexIcone icone={yoda}/>
      <PokedexIcone icone={boba}/>
      <PokedexIcone icone={boba}/>
    </div> 
    </section>
  )
}


{/* <section className={styles.container}>
{videos.map((video)=>{
 return  <Card {...video} key = {video.id}/>
})}
</section> */}