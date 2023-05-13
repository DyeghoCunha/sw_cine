import styles from './IconeGenerico.module.scss';



import React, { useState } from 'react'

export default function IconeGenerico(props) {

    const [isVisible, setIsVisible] = useState(true);
  
    const handleClick = () => {
      setIsVisible(false);
    
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
