import { useNavigate, useLoaderData } from "react-router-dom"

const PokemonInformation = () => {

  const navigate = useNavigate();

  const pokemon = useLoaderData();
  
  return(
    <>
    <section id={pokemon.id} class="pokemon-information-box">
      <img src={pokemon.sprites.front_default} class="poke-info-img" alt={pokemon.forms[0].name + " default"} />
      <img src={pokemon.sprites.front_shiny} class="poke-info-img" alt={pokemon.forms[0].name + " shiny"} />
      {pokemon.sprites.front_female ? <img src={pokemon.sprites.front_female} class="poke-info-img" alt={pokemon.forms[0].name + " female"} /> : null}
      {pokemon.sprites.front_shiny_female ? <img src={pokemon.sprites.front_shiny_female} class="poke-info-img" alt={pokemon.forms[0].name + " female shiny"} /> : null}
      <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
      
      
    </section>
    </>
  )
}

export default PokemonInformation