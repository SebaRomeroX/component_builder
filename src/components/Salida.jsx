import { useState } from "react"

export const SalidaCodigo = ({ estilos }) => {
  const { Color, Fondo, Tamaño, Fuente, Peso, Espacio, Altura } = estilos
  const [copiar, setCopiar] = useState('📝')

  function copiarCodigo() {
    const codigo = document.getElementById('codigo').textContent
    console.log(codigo)

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
        <p>Lorem ipsum</p>
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