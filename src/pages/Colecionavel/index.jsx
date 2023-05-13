import React, { useState } from "react";
import styles from "./Colecionavel.module.scss";
import iconeTeste from '../../assets/imagem/icons/icons/1626617_ewok_wicket_endor_star wars.png';
import Icone from "./Icone";


function Colecionavel() {
  const [contador, setContador] = useState(0);


  const handleIconClick = () => {
    setContador(contador + 1);
  };

  return (
    
    <div className={styles.colecionavelContainer}>
      <h1>{contador}</h1>
      <Icone left='20px' top='20px' src={iconeTeste}  onIconClick={handleIconClick} />
    
    </div>
  );
}

export default Colecionavel;


