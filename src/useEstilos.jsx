import { useState } from "react"

export const useEstilos = () => {
  const [estilos, setEstilos] = useState({
    Color: '#F0F8FF', 
    Fondo: '#020202',
    Fuente: 'system-ui',
    Tamaño: '1.4',
    Peso: '400',
    Espacio: '0.04',
    Altura: '1.4',
    gap: '1',
    align: 'left',
  })

  function actualizarEstilos (campo, valor) {
    setEstilos(prev => ({...prev, [campo]: valor}))
  }

  return { estilos, actualizarEstilos }
}