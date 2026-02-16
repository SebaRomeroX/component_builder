import { useContext } from "react"
import { EstilosContext } from "../../context/estilosContext"

export const InputColor = ({ elemento }) => {
  const { label, campo } = elemento
  const { estilos, actualizarEstilos } = useContext(EstilosContext)

  const valorObtenido = estilos[campo]

  return (
    <label>
      <p>{label}</p>
      <input
        type='color'
        onChange={(e) => actualizarEstilos(campo, e.target.value)}
        value={valorObtenido}
      />
    </label>
  )
}