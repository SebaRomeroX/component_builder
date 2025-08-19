import { useState } from 'react'
import './App.css'

const Inputs = ({ setEstilos }) => {
  const Opciones = {
    fuente: ['serif',
      'system-ui',
      'Courier New',
      'Franklin Gothic Medium',
      'Arial',
      'Calibri',
      'Verdana',
      'Segoe UI',
      'Tahoma',
      'Trebuchet MS',
      'Cambria',
      'Georgia',
      'Impact',
      'cursive',
      'monospace'
    ],
    tamaño: [1, 1.2, 1.4, 1.6],
    peso: [400, 600],
    espacio: [0, 0.04, 0.08, 0.12, 0.16, 0.2],
    altura: [1.2, 1.4, 1.6]
  }

  function handleInput (campo, valor) {
    setEstilos(prev => ({...prev, [campo]: valor}))
  }

  return (
    <section>
      <h2>Configuracion</h2>
      <section>
        {
          Object.keys(Opciones).map(opcion => (
            <label>
              <p>{opcion}</p>
              <select onChange={(e) => handleInput(opcion, e.target.value)} >
                {
                  Opciones[opcion].map(item => (
                    <option value={item} >{item}</option>
                  ))
                }
              </select>
            </label>
          ))
        }

        <label>
          <p>Color</p>
          <input type='color' value='#F0F8FF' onChange={(e) => handleInput('color', e.target.value)}/>
        </label>

        <label>
          <p>Fondo</p>
          <input type='color' onChange={(e) => handleInput('fondo', e.target.value)}/>
        </label>
      </section>
    </section>
  )
}

const Visualizador = ({ estilos }) => {
  const { color, fondo, tamaño, fuente, peso, espacio, altura } = estilos

  return (
    <section>
      <h2>Texto Ejemplo</h2>

      <article style={{
        color: color,
        background: fondo,
        fontFamily: fuente,
        fontSize: `${tamaño}em`,
        fontWeight: peso,
        letterSpacing: `${espacio}em`,
        lineHeight: `${altura}em`
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

const SalidaCodigo = ({ estilos }) => {
  const { color, fondo, tamaño, fuente, peso, espacio, altura } = estilos

  return (
    <section>
      <h2>Codigo</h2>

      <pre>{`
      <article class='texto'>
        <p>Lorem ipsum</p>
      </article>

      <style>
        .texto {
          color: ${color};
          background: ${fondo};
          font-family: ${fuente};
          font-size: ${tamaño}em;
          font-weight: ${peso};
          letter-spacing: ${espacio}em;
          line-height: ${altura}em;
        }
      </style>
      `}</pre>
    </section>
  )
}

const App = () => {
  const [estilos, setEstilos] = useState({
    color: 'aliceblue',
    fondo: 'black',
    fuente: 'serif',
    tamaño: '1',
    peso: '400',
    espacio: '0',
    altura: '1.2'
  })

  return (
    <section>
      <h1>Component Builder</h1>
      <Inputs setEstilos={setEstilos} />
      <Visualizador estilos={estilos} />
      <SalidaCodigo estilos={estilos} />
    </section>
  )
}

export default App
