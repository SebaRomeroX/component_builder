import { useState } from "react"

export const SalidaCodigo = ({ estilos, texto }) => {
  const { Color, Fondo, Tamaño, Fuente, Peso, Espacio, Altura } = estilos
  const { titulo, parrafo1, parrafo2, subtitulo, parrafo3 } = texto
  const [copiar, setCopiar] = useState('📝')


  function copiarCodigo() {
    const codigo = document.getElementById('codigo').textContent

    navigator.clipboard.writeText(codigo)
      .then(() => {
        setCopiar('✔')
      }).catch(() => {
        setCopiar('❗')
      }).finally(() => {
        setTimeout(() => setCopiar('📝'), 3000)
      })
  }

  return (
    <section className='salida-codigo'>
      <article>
        <h2 className='titulo'>Codigo</h2>
        <button onClick={copiarCodigo}>Copiar <span>{copiar}</span></button>
      </article>

      <pre id="codigo">{`
      <article class='texto'>
        <h2>${titulo}</h2>
        <p>${parrafo1}</p>
        <p>${parrafo2}</p>
        <h3>${subtitulo}</h3>
        <p>${parrafo3}</p>
      </article>

      <style>
        .texto {
          color: ${Color};
          background: ${Fondo};
          font-family: ${Fuente};
          font-size: ${Tamaño}em;
          font-weight: ${Peso};
          letter-spacing: ${Espacio}em;
          line-height: ${Altura}em;
        }
      </style>
      `}</pre>
    </section>
  )
}