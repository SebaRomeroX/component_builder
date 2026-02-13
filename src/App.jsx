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

  const [texto, setTexto] = useState({
    titulo: 'Titulo de Ejemplo',
    parrafo1: 'Este es un texto de prueba.',
    parrafo2: 'Puedes escribir lo que quieras aqui para ver como se aplican los estilos.',
    subtitulo: 'Un subtitulo',
    parrafo3: 'O tambien puedes pegar otro texto, si prefieres.'
  })

  function actualizarEstilos (campo, valor) {
    setEstilos(prev => ({...prev, [campo]: valor}))
  }

  function actualizarTexto (campo, valor) {
    setTexto(prev => ({...prev, [campo]: valor}))
  }

  return (
    <section>
      <h1 className='titulo header'>Estila tu Texto</h1>
      <Inputs actualizarEstilos={actualizarEstilos} />
      <Visualizador
        actualizarTexto={actualizarTexto}
        texto={texto}
        estilos={estilos}
      />
      <SalidaCodigo texto={texto} estilos={estilos} />
    </section>
  )
}

export default App
