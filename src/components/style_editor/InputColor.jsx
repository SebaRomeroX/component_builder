export const InputColor = ({ label, funcion, inicial }) => {
  return (
    <label>
      <p>{label}</p>
      <input
        type='color'
        onChange={(e) => funcion(label, e.target.value)}
        value={inicial}
      />
    </label>
  )
}