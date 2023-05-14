import { createContext, useContext, useState } from "react";
import React from 'react'

export const IconesContext = createContext();
IconesContext.displayName = "IconesContext"


export default function IconesProvider({ children }) {
  const [iconeSw, setIconeSw] = useState([])
  return (
    <IconesContext.Provider
      value={{ iconeSw, setIconeSw }}>
      {children}
    </IconesContext.Provider>
  )
}


export function useIconesContext() {

  const { iconeSw, setIconeSw } = useContext(IconesContext);

  function adicionarIcone(novoIcone) {
    const iconeRepetido = iconeSw.some(item => item.id === novoIcone.id)

    let novaLista = [...iconeSw];
    
    if (!iconeRepetido) {
      novaLista.push(novoIcone);
      return setIconeSw(novaLista);
    }

    //novaLista.splice(novaLista.indexOf(novoIcone), 1)
    //return setIconeSw(novaLista)
  }
  return {
    iconeSw,
    adicionarIcone
  }
}



