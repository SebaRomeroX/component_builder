export const InputSelect = ({ elemento ,funcion, inicial }) => {
  const { label, opciones, campo } = elemento
  return (
    <label>
      <p>{label}</p>
      <select
        onChange={(e) => funcion(campo, e.target.value)}
        defaultValue={inicial}
      >
        {
          opciones.map(opcion =>
            <option value={opcion.contenido}>{opcion.nombre}</option>
          )
        }
      </select>
    </label>
  )
}