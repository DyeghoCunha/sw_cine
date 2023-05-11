import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { faFireFlameSimple } from '@fortawesome/free-solid-svg-icons';
import styles from './BotaoFoguete.module.scss'
import { ReactComponent as Foguete } from './rocket.svg';
import { ReactComponent as Nuvem } from './cloud.svg';
import xwing from '../../assets/imagem/xwing.png'


export default function BotaoFoguete() {
  const var0 = { '--i': 0 };
  const var1 = { '--i': 1 };
  const var2 = { '--i': 2 };
  const var3 = { '--i': 3 };

  

  return (
    <section className={styles.container}>

      <div className={styles.loader}>

        <div className={styles.rocket}>
        

          <img src ={xwing} className={styles.faRocket} />
          <FontAwesomeIcon icon={faFire} className={styles.faFire}/>
          <FontAwesomeIcon icon={faFireFlameCurved} className={styles.faFireCurved}/>
          <FontAwesomeIcon icon={faFireFlameSimple} className={styles.faFireSimple}/>

          {/* <Foguete  className={styles.faRocket2} /> */}

          <FontAwesomeIcon icon={faCloud} className={styles.faCloud} style={var0} />
          <FontAwesomeIcon icon={faCloud} className={styles.faCloud} style={var1} />
          <FontAwesomeIcon icon={faCloud} className={styles.faCloud} style={var2} />
          <FontAwesomeIcon icon={faCloud} className={styles.faCloud} style={var3} />

          <Nuvem  className={styles.faCloud2} style={var0} />
          <Nuvem  className={styles.faCloud2} style={var1} />
          <Nuvem  className={styles.faCloud2} style={var2} />
          <Nuvem  className={styles.faCloud2} style={var3} />



        </div>

        <span><i></i></span>
      </div>
    </section>


  )
}
