export const InputSelect = ({ elemento ,funcion, inicial }) => {
  const { label, opciones } = elemento
  return (
    <label>
      <p>{label}</p>
      <select
        onChange={(e) => funcion(label, e.target.value)}
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