import { useState } from 'react'
import './App.css'
import { StyleEditor } from './components/style_editor/StyleEditor'
import { SalidaCodigo } from './components/Salida'
import { Visualizador } from './components/Visualizador'

function useEstilos () {
  const [estilos, setEstilos] = useState({
    color: '#F0F8FF', // sacar de inputsParams ?¡?¡?¡?
    background: '#020202',
    family: 'system-ui',
    size: '1.4',
    weight: '400',
    spacing: '0.04',
    height: '1.4',
    gap: '1',
    align: 'left',
  })

  function actualizarEstilos (campo, valor) {
    setEstilos(prev => ({...prev, [campo]: valor}))
  }

  return { estilos, actualizarEstilos }
}

const App = () => {
  const { estilos, actualizarEstilos } = useEstilos()

  const [texto, setTexto] = useState({
    titulo: 'Texto de Ejemplo',
    parrafo1: 'Esta es una vista previa de tus estilos.',
    parrafo2: 'Puedes escribir lo que quieras aqui para ver como se aplican los estilos. Este va a ser un string mas largo para que se aprecie el salto de linea y la distancia entre ellas.',
    subtitulo: 'Pega un texto',
    parrafo3: 'Puedes copiar cualquien texto y pegarlo aqui, si prefieres.'
  })

  function actualizarTexto (campo, valor) {
    setTexto(prev => ({...prev, [campo]: valor}))
  }

  return (
    <section>
      <h1 className='titulo header'>Estila tu Texto</h1>
      <StyleEditor
        actualizarEstilos={actualizarEstilos}
        estilos={estilos}
      />
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
