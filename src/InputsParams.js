const OPCIONES_FUENTE = [
  { nombre: 'Times New Roman', contenido: 'Times New Roman, Times, serif' },
  { nombre: 'Georgia', contenido: 'Georgia, serif' },
  { nombre: 'Garamond', contenido: 'Garamond, serif' },
  { nombre: 'Palatino', contenido: 'Palatino, Palatino Linotype, serif' },
  { nombre: 'Arial', contenido: 'Arial, Helvetica, sans-serif' },
  { nombre: 'Helvetica', contenido: 'Helvetica, sans-serif' },
  { nombre: 'Verdana', contenido: 'Verdana, Geneva, sans-serif' },
  { nombre: 'Open Sans', contenido: 'Open Sans, sans-serif' },
  { nombre: 'Roboto', contenido: 'Roboto, sans-serif' },
  { nombre: 'Segoe UI', contenido: 'Segoe UI, Tahoma, sans-serif' },
  { nombre: 'Courier New', contenido: 'Courier New, Courier, monospace' },
  { nombre: 'Consolas', contenido: 'Consolas, Monaco, monospace' },
  { nombre: 'Monaco', contenido: 'Monaco, monospace' },
  { nombre: 'Comic Sans MS', contenido: 'Comic Sans MS, cursive' },
  { nombre: 'Brush Script', contenido: 'Brush Script MT, cursive' },
  { nombre: 'Papyrus', contenido: 'Papyrus, fantasy' },
  { nombre: 'Serif (genérica)', contenido: 'serif' },
  { nombre: 'Sans-serif (genérica)', contenido: 'sans-serif' },
  { nombre: 'Monospace (genérica)', contenido: 'monospace' },
  { nombre: 'Cursive (genérica)', contenido: 'cursive' },
  { nombre: 'Fantasy (genérica)', contenido: 'fantasy' },
  { nombre: 'System UI', contenido: 'system-ui' },
]


export const InputsNumberParams = {
  gap: { label: 'gap', min: 1, max: 3, step: 0.1 },
  tamaño: { label: 'Tamaño', min: 1, max: 2, step: 0.1 },
  altura: { label: 'Altura', min: 1, max: 2, step: 0.1 },
  espacio: { label: 'Espacio', min: 0, max: 0.3, step: 0.01 },
}

export const InputsSelectsParams = {
  align: {
    label: 'align',
    opciones: [
      {nombre: 'inicio', contenido: 'left'},
      {nombre: 'centrado', contenido: 'center'}
    ],
  },
  fuente: {
    label: 'Fuente',
    opciones: OPCIONES_FUENTE,
  },
  peso: {
    label: 'Peso',
    opciones: [
      {nombre: '100', contenido: 100},
      {nombre: '400', contenido: 400},
      {nombre: '600', contenido: 600},
    ],
  },
}