
import React, { useState } from 'react'
import styles from './Icone.module.scss'

export default function Icone(props) {

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
    props.onIconClick();
  };

  return (
    <section className={styles.container}>
    <div
      className={`icone ${isVisible ? "" : "escondido"}`}
      style={{ 
        transform: `translateX(${props.left}) translateY(${props.top})` 
      }}
      onClick={handleClick}
    >
      {isVisible && <img className={styles.iconeMeu} src={props.src} alt={props.alt} />}

    </div>
    </section>
  );
}