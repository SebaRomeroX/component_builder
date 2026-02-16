import { InputsColorParams, InputsNumberParams, InputsSelectsParams } from '../../InputsParams.js'
import { InputNumber } from './InputNumber.jsx'
import { InputSelect } from './InputSelect.jsx'
import { InputColor } from './InputColor.jsx'

export const StyleEditor = ({ estilos, actualizarEstilos }) => {
  const { color, background, size, family, weight, spacing, height, gap, align } = estilos

  return (
    <section>
      <h2 className='titulo'>Configuracion</h2>
      <section className='inputs-configuracion'>
        <InputNumber
          elemento={InputsNumberParams.gap}
          inicial={gap}
          funcion={actualizarEstilos}
        />
        <InputSelect
          elemento={InputsSelectsParams.align}
          funcion={actualizarEstilos}
          inicial={align}
        />
        <InputColor
          elemento={InputsColorParams.color}
          funcion={actualizarEstilos}
          inicial={color}
        />
        <InputColor
          elemento={InputsColorParams.fondo}
          funcion={actualizarEstilos}
          inicial={background}
        />
      </section>
      <section className='inputs-configuracion'>
        <InputSelect
          elemento={InputsSelectsParams.fuente}
          funcion={actualizarEstilos}
          inicial={family}
        />
        <InputSelect
          elemento={InputsSelectsParams.peso}
          funcion={actualizarEstilos}
          inicial={weight}
        />
        <InputNumber
          elemento={InputsNumberParams.tamaño}
          inicial={size}
          funcion={actualizarEstilos}
        />
        <InputNumber
          elemento={InputsNumberParams.altura}
          inicial={height}
          funcion={actualizarEstilos}
        />
        <InputNumber
          elemento={InputsNumberParams.espacio}
          inicial={spacing}
          funcion={actualizarEstilos}
        />
      </section>
    </section>
  )
}