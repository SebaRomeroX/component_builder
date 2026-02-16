export const InputColor = ({ elemento, funcion, inicial }) => {
  const { label, campo } = elemento

  return (
    <label>
      <p>{label}</p>
      <input
        type='color'
        onChange={(e) => funcion(campo, e.target.value)}
        value={inicial}
      />
    </label>
  )
}