export const InputNumber = ({ elemento, funcion, inicial }) => {
  const { label, min, max, step, campo } = elemento
  return (
    <label>
      <p>{label}</p>
      <input
        type="number"
        onChange={(e) => funcion(campo, e.target.value)}
        min={min}
        max={max}
        step={step}
        defaultValue={inicial}
      />
    </label>
  )
}