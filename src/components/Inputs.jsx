export const Inputs = ({ actualizarEstilos }) => {
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

  return (
    <section>
      <h2 className='titulo'>Configuracion</h2>
      <section className='inputs-configuracion'>
        {
          Object.keys(Opciones).map(opcion => (
            <label>
              <p>{opcion}</p>
              <select onChange={(e) => actualizarEstilos(opcion, e.target.value)} >
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
          <input type='color' onChange={(e) => actualizarEstilos('Color', e.target.value)}/>
        </label>

        <label>
          <p>Fondo</p>
          <input type='color' onChange={(e) => actualizarEstilos('Fondo', e.target.value)}/>
        </label>
      </section>
    </section>
  )
}