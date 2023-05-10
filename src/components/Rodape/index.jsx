import styles from './Rodape.module.scss';
import bb8 from '../../assets/imagem/swCine_footer.png'
import icone1 from '../../assets/imagem/icons/icons/1626612_star wars_chewbacca_wookie_chewie_rebel.png'
import icone2 from '../../assets/imagem/icons/icons/1626616_sidious_palpatine_emperor_sith_star wars_empire_darth.png'
import icone3 from '../../assets/imagem/icons/icons/1626615_jedi_star wars_sith_darth_vader_anakin_skywalker.png'
import instagram from './icones/instagram.svg'
import facebook from './icones/facebook.svg'
import github from './icones/github.svg'

import React from 'react'

import LinkRodape from './LinkRodape';

export default function Rodape() {
  return (
    <footer className={styles.rodapeContainer}>
      <div className={styles.rodape}>


        <img src={bb8} alt="" />

        <div className={styles.linkContainer}>

          <LinkRodape icone={icone1} link={'./'}>Imagens dos Cards</LinkRodape>
          <LinkRodape icone={icone2} link={'./'}>Imagem dos Icones</LinkRodape>
          <LinkRodape icone={icone3} link={'./'}>Galeria Start Wars</LinkRodape>
          

        </div>

        <div className={styles.linkContainer}>

          <LinkRodape icone={instagram} link={'./'}></LinkRodape>
          <LinkRodape icone={facebook} link={'./'}></LinkRodape>
          <LinkRodape icone={github} link={'./'}></LinkRodape>

        </div>

      </div>

    </footer>
  )
}
