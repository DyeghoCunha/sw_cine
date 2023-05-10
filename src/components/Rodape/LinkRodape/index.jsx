
import { Link } from 'react-router-dom';
import styles from './LinkRodape.module.scss';


import React from 'react'




export default function LinkRodape({icone,children,link}) {
  return (


    <Link className={styles.link} to={link}>
      <img className={styles.icone} src={icone} alt="" />
      <h4 className={styles.linkTitulo}>{children}</h4>
    </Link>
    
  )
}



