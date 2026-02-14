import { InputsNumberParams, InputsSelectsParams } from '../../InputsParams.js'
import { InputNumber } from './InputNumber.jsx'
import { InputSelect } from './InputSelect.jsx'
import { InputColor } from './InputColor.jsx'

export const StyleEditor = ({ estilos, actualizarEstilos }) => {
  const { Color, Fondo, Tamaño, Fuente, Peso, Espacio, Altura, gap, align } = estilos

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
          label={'Color'}
          funcion={actualizarEstilos}
          inicial={Color}
        />
        <InputColor
          label={'Fondo'}
          funcion={actualizarEstilos}
          inicial={Fondo}
        />
      </section>
      <section className='inputs-configuracion'>
        <InputSelect
          elemento={InputsSelectsParams.fuente}
          funcion={actualizarEstilos}
          inicial={Fuente}
        />
        <InputSelect
          elemento={InputsSelectsParams.peso}
          funcion={actualizarEstilos}
          inicial={Peso}
        />
        <InputNumber
          elemento={InputsNumberParams.tamaño}
          inicial={Tamaño}
          funcion={actualizarEstilos}
        />
        <InputNumber
          elemento={InputsNumberParams.altura}
          inicial={Altura}
          funcion={actualizarEstilos}
        />
        <InputNumber
          elemento={InputsNumberParams.espacio}
          inicial={Espacio}
          funcion={actualizarEstilos}
        />
      </section>
    </section>
  )
}