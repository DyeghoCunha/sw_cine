import { createContext, useContext, useState } from "react";
import React from 'react'

export const IconesContext = createContext();
IconesContext.displayName = "IconesContext"


export default function IconesProvider({ children }) {
  const [iconeSw, setIconeSw] = useState([]);
  const [contador, setContador] = useState(1);
  return (
    <IconesContext.Provider
      value={{ iconeSw, setIconeSw, contador, setContador }}>
      {children}
    </IconesContext.Provider>
  )
}


export function useIconesContext() {

  const { iconeSw, setIconeSw } = useContext(IconesContext);
  const {contador , setContador} = useContext(IconesContext);

  function adicionarIcone(novoIcone) {
    const iconeRepetido = iconeSw.some(item => item.id === novoIcone.id)

    let novaLista = [...iconeSw];
    let novoNumero = contador + 1;
     console.log (`Este eh o Contador: ${contador}`)
    if (!iconeRepetido) {
      novaLista.push(novoIcone);
      setContador(novoNumero)
      return setIconeSw(novaLista);
    }

    //novaLista.splice(novaLista.indexOf(novoIcone), 1)
    //return setIconeSw(novaLista)
  }
  return {
    iconeSw,
    adicionarIcone,
    contador
  }
}



