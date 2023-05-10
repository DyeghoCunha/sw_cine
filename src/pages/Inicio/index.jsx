import Banner from '../../components/Banner';
import Cabecalho from '../../components/Cabecalho';
import Card from '../../components/Card';
import Rodape from '../../components/Rodape';
import styles from './Inicio.module.scss';


import React from 'react'

export default function Inicio() {
  return (
    <>
    <Cabecalho></Cabecalho>
    <Banner/>
    <Card />
    <Rodape/>
    </>
  )
}
