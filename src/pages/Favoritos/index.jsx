import Banner from '../../components/Banner'

import Titulo from '../../components/Titulo'
import styles from './Favoritos.module.scss'



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
