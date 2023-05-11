import Banner from '../../components/Banner'
import Cabecalho from '../../components/Cabecalho'
import Rodape from '../../components/Rodape'
import Titulo from '../../components/Titulo'
import styles from './Favoritos.module.scss'
import favoritosImg from '../../assets/imagem/swCine_bannerFav.png'
import capa from '../../assets/imagem/sw-cover/6.png'


import React from 'react'
import Card from '../../components/Card'
import { useFavoritoContext } from '../../components/context/Favoritos'

export default function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>

      <Banner imagem="favoritos"></Banner>
      <Titulo>
        <h1>Seus Filmes Favoritos! </h1>
      </Titulo>

      <section className={styles.container}>
        {favorito.map((fav)=>{
          return <Card {...fav} key={fav.id} />
          
        })}
      </section>

    </>
  )
}
