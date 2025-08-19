import { useState } from 'react'
import './App.css'

const Inputs = ({ setEstilos }) => {
  const Opciones = {
    Fuente: ['serif',
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
    Tamaño: [1, 1.2, 1.4, 1.6, 1.8],
    Peso: [100, 400, 600],
    Espacio: [0, 0.04, 0.08, 0.12, 0.16, 0.2],
    Altura: [1.2, 1.4, 1.6, 1.8]
  }

  function handleInput (campo, valor) {
    setEstilos(prev => ({...prev, [campo]: valor}))
  }

  return (
    <section>
      <h2 className='titulo'>Configuracion</h2>
      <section className='inputs-configuracion'>
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
          <input type='color' onChange={(e) => handleInput('Color', e.target.value)}/>
        </label>

        <label>
          <p>Fondo</p>
          <input type='color' onChange={(e) => handleInput('Fondo', e.target.value)}/>
        </label>
      </section>
    </section>
  )
}

const Visualizador = ({ estilos }) => {
  const { Color, Fondo, Tamaño, Fuente, Peso, Espacio, Altura } = estilos

  return (
    <section>
      <h2 className='titulo'>Texto de Ejemplo</h2>

      <article
        className='visualizador'
        style={{
          color: Color,
          background: Fondo,
          fontFamily: Fuente,
          fontSize: `${Tamaño}em`,
          fontWeight: Peso,
          letterSpacing: `${Espacio}em`,
          lineHeight: `${Altura}em`
        }}
      >
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
  const { Color, Fondo, Tamaño, Fuente, Peso, Espacio, Altura } = estilos

  return (
    <section className='salida-codigo'>
      <h2 className='titulo'>Codigo</h2>

      <pre>{`
      <article class='texto'>
        <p>Lorem ipsum</p>
      </article>

      <style>
        .texto {
          color: ${Color};
          background: ${Fondo};
          font-family: ${Fuente};
          font-size: ${Tamaño}em;
          font-weight: ${Peso};
          letter-spacing: ${Espacio}em;
          line-height: ${Altura}em;
        }
      </style>
      `}</pre>
    </section>
  )
}

const App = () => {
  const [estilos, setEstilos] = useState({
    Color: 'aliceblue',
    Fondo: 'black',
    Fuente: 'serif',
    Tamaño: '1',
    Peso: '400',
    Espacio: '0',
    Altura: '1.2'
  })

  return (
    <section>
      <h1 className='titulo header'>Formateador de Texto</h1>
      <Inputs setEstilos={setEstilos} />
      <Visualizador estilos={estilos} />
      <SalidaCodigo estilos={estilos} />
    </section>
  )
}

export default App
