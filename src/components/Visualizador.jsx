import { useState } from "react"

export const Visualizador = ({ estilos, texto, actualizarTexto }) => {
  const { Color, Fondo, Tamaño, Fuente, Peso, Espacio, Altura, gap, align } = estilos
  const [textoInicial] = useState(texto)

  return (
    <section>
      <article
        className='visualizador'
        spellCheck='false'
        style={{
          color: Color,
          background: Fondo,
          fontFamily: Fuente,
          fontSize: `${Tamaño}em`,
          fontWeight: Peso,
          letterSpacing: `${Espacio}em`,
          lineHeight: `${Altura}em`,
          gap: `${gap}em`,
          textAlign: align
        }}
      >
        <h2
          contentEditable="plaintext-only"
          onInput={(e) => actualizarTexto('titulo', e.target.textContent)}
        >
          {textoInicial.titulo}
        </h2>
        <p
          contentEditable="plaintext-only"
          onInput={(e) => actualizarTexto('parrafo1', e.target.textContent)}
        >
          {textoInicial.parrafo1}
        </p>
        <p
          contentEditable="plaintext-only"
          onInput={(e) => actualizarTexto('parrafo2', e.target.textContent)}
        >
          {textoInicial.parrafo2}
        </p>
        <h3
          contentEditable="plaintext-only"
          onInput={(e) => actualizarTexto('subtitulo', e.target.textContent)}
        >
          {textoInicial.subtitulo}
        </h3>
        <p
          contentEditable="plaintext-only"
          onInput={(e) => actualizarTexto('parrafo3', e.target.textContent)}
        >
          {textoInicial.parrafo3}
        </p>
      </article>
    </section>
  )
}