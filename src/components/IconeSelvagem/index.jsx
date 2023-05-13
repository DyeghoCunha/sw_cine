

import React from 'react'
import styles from './IconeSelvagem.module.scss'
import IconeGenerico from '../IconeGenerico'
import lista from '../../json/lista.json'
import iconeFavoritar from '../../assets/imagem/icons/icons/1626610_boba_mandalorian_hunter_bounty_star wars_boba_fett_bounty_star wars_mandalorian_hunter_fett.png'
import iconeDesfavoritar from '../../assets/imagem/icons/icons/1626617_ewok_wicket_endor_star wars.png'

import { useIconesContext } from '../context/Icones';


export default function IconeSelvagem({ id, icone, titulo, foto, descricao, planeta }) {

  const { iconeSw, adicionarIcone } = useIconesContext();
  const ehFavorito = iconeSw.some((fav) => fav.id === id);
  const parametro = ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  /* Posicao Aleatoria e Icone Aleatorio */
  const randomIndex = Math.floor(Math.random() * lista.length);
  const aleatorioLeft = Math.floor(Math.random() * window.innerWidth)
  const aleatorioTop = Math.floor(Math.random() * window.innerHeight)
  const left = `${aleatorioLeft}.px`
  const top = `${aleatorioTop}.px`
  /* Posicao Aleatoria e Icone Aleatorio */

  return (

    <div className={styles.iconeSelvagem}>
      <IconeGenerico
        left={left}
        top={top}
        icone={`https://raw.githubusercontent.com/DyeghoCunha/sw_cine/master/src/components/Pokedex/image/startwars${randomIndex}.png`}
        id={id}
      /*      onClick={()=>{
             adicionarIcone({id,icone,titulo,foto,descricao,planeta})}} */
      />
    </div>


  )
}
