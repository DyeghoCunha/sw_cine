import styles from './Card.module.scss';
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { useFavoritoContext } from '../context/Favoritos';


import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({id,titulo,subtitulo,capa}) {

/* Favorito */
const {favorito, adicionarFavorito} = useFavoritoContext();
const ehFavorito = favorito.some((fav)=> fav.id===id);
const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar
/* Favorito */


  return (
    
    <div className={styles.cardContainer}>

      <div className={styles.card}>
        <div className={styles.tituloContainer}>
          
          <h2 className={styles.titulo}>{titulo}</h2>
          
          <img 
          src={icone} 
          className={styles.favorito}
          onClick={()=>{
            adicionarFavorito({id,titulo,capa,subtitulo})}}
           />

        </div>
        <Link className={styles.link} to={`/${id}`}>
        <img className={styles.cardFoto} src={capa} alt="" />
        <h3 className={styles.subTitulo}>{subtitulo}</h3>
        </Link>

      </div>
      
    </div>
  )
}
