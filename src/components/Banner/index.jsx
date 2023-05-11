import styles from './Banner.module.scss';




import React from 'react'

function Banner({ imagem }) {
  return (
      <div className={styles.banner}
          style={{ backgroundImage: `url('../../imagens/${imagem}.png')` }}></div>
  )
}

export default Banner;