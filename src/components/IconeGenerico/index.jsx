import styles from './IconeGenerico.module.scss';

import { useIconesContext } from '../context/Icones';

import React, { useState } from 'react'

export default function IconeGenerico({id,icone,titulo,foto,descricao,planeta,left,top}) {

    const [isVisible, setIsVisible] = useState(true);
    const handleClick = () => {
      setIsVisible(true);
    };

    const { iconeSw, adicionarIcone } = useIconesContext();
    // const ehFavorito = iconeSw.some((fav) => fav.id === id);
 
  
  
    return (
      <section className={styles.container}>
      <div
       // className={`icone ${isVisible ? "" : "escondido"}`}
        style={{ 
          transform: `translateX(${left}) translateY(${top})` 
        }}
        //onClick={handleClick}
        onClick={()=>{
          adicionarIcone({id,icone,titulo,foto,descricao,planeta})}}
      >
        {isVisible && <img className={styles.iconeMeu} src={icone} alt={titulo} id={id} />}
  
      </div>
      </section>
    );

}
