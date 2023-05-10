import styles from './Banner.module.scss';
import imagem from '../../assets/imagem/sw-banner/1.png'



import React from 'react'

export default function Banner() {
  return (
    <img src={imagem} className={styles.banner} alt="" />
  )
}
