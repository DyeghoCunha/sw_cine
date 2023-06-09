import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.scss'
import React from 'react'
import CabecalhoLink from './CabecalhoLink'
import logo from '../../assets/imagem/swCine_logoS.png'





export default function Cabecalho() {
  return (
   <header className={styles.cabecalho}>
      <Link className={styles.logo} to="./">
        <img src={logo}></img>
      </Link>
      <nav className={styles.containerLink}>
        <CabecalhoLink  url='/'>
        <div className={styles.cabecalhoLink}>
         {/*  <img className={styles.icone} src={home} alt="" /> */}
          <h1 className={styles.linkTitulo}>Home</h1>
         
        </div>
        </CabecalhoLink>
        <CabecalhoLink url='/favoritos'>
        <div className={styles.cabecalhoLink}>
          {/* <img className={styles.icone} src={favoritos} alt="" /> */}
          <h1 className={styles.linkTitulo}>Favoritos</h1>
       
        </div>
        </CabecalhoLink>
      </nav>
      

   </header>
  )
}
