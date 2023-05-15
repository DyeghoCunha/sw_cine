import styles from './Rodape.module.scss';
import bb8 from '../../assets/imagem/swCine_footer.png'
import icone1 from '../../assets/imagem/icons/1.png'
import icone2 from '../../assets/imagem/icons/9.png'
import icone3 from '../../assets/imagem/icons/4.png'
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
        <div className={styles.links}>
          <div className={styles.linkContainer}>

            <LinkRodape icone={icone1} link={'./'}>Imagens dos Cards</LinkRodape>
            <LinkRodape icone={icone2} link={'https://symbolicons.com/free#star-wars'}>Imagem dos Icones</LinkRodape>
            <LinkRodape icone={icone3} link={'./'}>Galeria Start Wars</LinkRodape>


          </div>

          <div className={styles.linkContainer}>

            <LinkRodape icone={instagram} link={'./'}></LinkRodape>
            <LinkRodape icone={facebook} link={'./'}></LinkRodape>
            <LinkRodape icone={github} link={'./'}></LinkRodape>

          </div>
         
        </div>
        <h3>Desenvolvido por Dyegho Cunha</h3>

      </div>

    </footer>
  )
}
