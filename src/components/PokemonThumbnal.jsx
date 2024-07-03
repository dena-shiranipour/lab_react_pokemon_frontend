const PokemonThumbnail = ({pokemons}) => {
  
  return(
    <>
      <section className="pokemonThumbnail">
        {
          pokemons.map((pokemon, index) => {
            return(
            <div key={index}>
                <h3>{pokemon.forms[0].name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.forms[0].name} />
            </div>
            )
          })
        }

      </section>
    </>
  )
}

export default PokemonThumbnail