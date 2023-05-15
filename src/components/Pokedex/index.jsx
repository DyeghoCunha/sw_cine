import styles from './Pokedex.module.scss'
import boba from '../../assets/imagem/icons/icons/1626610_boba_mandalorian_hunter_bounty_star wars_boba_fett_bounty_star wars_mandalorian_hunter_fett.png'

import React, { useState } from 'react'
import PokedexIcone from './PokedexIcone'
import Placar from './Placar'

import { useIconesContext } from '../context/Icones'
import PlacarSmall from './PlacarSmall'



export default function Pokedex() {
  const { iconeSw } = useIconesContext();
  const [contador] = useState(0);
  const [mostrarContainerSmall, setMostrarContainerSmall] = useState(true);

  const handleClick = () => {
    setMostrarContainerSmall(false);
  };
  const handleClick2 = () => {
    setMostrarContainerSmall(true);
  };

  return (
    <>
    {!mostrarContainerSmall && (
      <section className={styles.container} onClick={handleClick2}>
        <Placar score={contador} icone={boba} />

        <div className={styles.iconesContainer}>
          {iconeSw.map((lista) => (
            <PokedexIcone {...lista} key={lista.id} />
          ))}
        </div>
      </section>)}

      {mostrarContainerSmall && (
        <section className={styles.containerSmall} onClick={handleClick}>
          <PlacarSmall score={contador} icone={boba} />
        </section>
      )}
    </>
  );
}




