import { useState } from 'react'
import './App.css'

function App() {
  const [estilos, setEstilos] = useState({
    color: 'red',
    fondo: 'aliceblue',
    fuente: 'serif',
    tamaño: '1',
    peso: '400',
    espacio: '0',
    altura: '1.2'
  })

  return (
    <section>
      <h1>Component Builder</h1>

      <article style={{
        color: estilos.color,
        background: estilos.fondo,
        fontFamily: estilos.fuente,
        fontSize: `${estilos.tamaño}em`,
        fontWeight: estilos.peso,
        letterSpacing: `${estilos.espacio}em`,
        lineHeight: `${estilos.altura}em`
      }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus sollicitudin congue dolor, at tempus sapien molestie in. 
          Aenean turpis nisl, consectetur nec diam commodo, consectetur suscipit velit. 
          Suspendisse eros mauris, pellentesque et tincidunt eu, sollicitudin eget risus. 
          Praesent at lectus sit amet ipsum accumsan venenatis vel sed purus. 
          Duis pulvinar lacinia lorem et maximus. Nulla sapien quam, 
          varius nec efficitur eget, sodales sit amet elit. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos.</p>
      </article>
    </section>
  )
}

export default App
