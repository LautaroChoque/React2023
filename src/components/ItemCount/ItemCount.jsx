import { useState } from 'react'

export const ItemCount = ({valInicial, stock}) => {
    
    const [contador, setContador] = useState(valInicial)
    
    const aumentarContador = () => (contador < stock) && setContador(contador + 1)
    const disminuirContador = () => (contador > valInicial) && setContador(contador - 1 )
    

  return (
    
    <>
    
      <button className='btn btn-dark boca' onClick={() => aumentarContador() }>+</button>  
            {contador}
      <button className='btn btn-dark' onClick={() => disminuirContador() } >-</button>
    </>
  )
}
    
