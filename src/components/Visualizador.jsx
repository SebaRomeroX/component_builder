export const Visualizador = ({ estilos }) => {
  const { Color, Fondo, Tamaño, Fuente, Peso, Espacio, Altura } = estilos

  return (
    <section>
      <h2 className='titulo'>Texto de Ejemplo</h2>

      <article
        className='visualizador'
        style={{
          color: Color,
          background: Fondo,
          fontFamily: Fuente,
          fontSize: `${Tamaño}em`,
          fontWeight: Peso,
          letterSpacing: `${Espacio}em`,
          lineHeight: `${Altura}em`
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus sollicitudin congue dolor, at tempus sapien molestie in. 
          Aenean turpis nisl, consectetur nec diam commodo, consectetur suscipit velit. 
          Suspendisse eros mauris, pellentesque et tincidunt eu, sollicitudin eget risus. 
          Praesent at lectus sit amet ipsum accumsan venenatis vel sed purus. 
          Duis pulvinar lacinia lorem et maximus. Nulla sapien quam, 
          varius nec efficitur eget, sodales sit amet elit. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos.</p>
      </article>
    </section>
  )
}