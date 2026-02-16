import { useState } from 'react'
import './App.css'
import { StyleEditor } from './components/style_editor/StyleEditor'
import { SalidaCodigo } from './components/Salida'
import { Visualizador } from './components/Visualizador'

const App = () => {

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
      <StyleEditor />
      <Visualizador
        actualizarTexto={actualizarTexto}
        texto={texto}
      />
      <SalidaCodigo texto={texto} />
    </section>
  )
}

export default App
