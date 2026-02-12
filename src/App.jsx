import { useState } from 'react'
import './App.css'
import { Inputs } from './components/Inputs'
import { SalidaCodigo } from './components/Salida'
import { Visualizador } from './components/Visualizador'


const App = () => {
  const [estilos, setEstilos] = useState({
    Color: 'aliceblue', // NO HAY QUE PONERLO A MANO --- TOMAR DE VALORES DEFINIDOS
    Fondo: 'black',
    Fuente: 'system-ui',
    Tamaño: '1.4',
    Peso: '400',
    Espacio: '0.04',
    Altura: '1.4'
  })

  function actualizarEstilos (campo, valor) {
    setEstilos(prev => ({...prev, [campo]: valor}))
  }

  return (
    <section>
      <h1 className='titulo header'>Estila tu Texto</h1>
      <Inputs actualizarEstilos={actualizarEstilos} />
      <Visualizador estilos={estilos} />
      <SalidaCodigo estilos={estilos} />
    </section>
  )
}

export default App
