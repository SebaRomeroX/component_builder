export const InputNumber = ({ elemento, funcion, inicial }) => {
  const { label, min, max, step } = elemento
  return (
    <label>
      <p>{label}</p>
      <input
        type="number"
        onChange={(e) => funcion(label, e.target.value)}
        min={min}
        max={max}
        step={step}
        defaultValue={inicial}
      />
    </label>
  )
}