import { useNavigate, useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";

const PokemonInformation = () => {

  const navigate = useNavigate();

  const pokemon = useLoaderData();
  
  return(
    <>
    <section id={pokemon.id} className="pokemon-information-box">
      <img src={pokemon.sprites.front_default} className="poke-info-img" alt={pokemon.forms[0].name + " default"} />
      <img src={pokemon.sprites.front_shiny} className="poke-info-img" alt={pokemon.forms[0].name + " shiny"} />
      {pokemon.sprites.front_female ? <img src={pokemon.sprites.front_female} className="poke-info-img" alt={pokemon.forms[0].name + " female"} /> : null}
      {pokemon.sprites.front_shiny_female ? <img src={pokemon.sprites.front_shiny_female} className="poke-info-img" alt={pokemon.forms[0].name + " female shiny"} /> : null}
      <hr />
      {pokemon.sprites.other.showdown.front_default ? <img src={`${pokemon.sprites.other.showdown.front_default}`} alt={"official"}/> : null}
      
      <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>Types:</p>
      <ul>
          {pokemon.types.map((o, index)=>{
            return(
              <li key={index}>{o.type.name}</li>
            )
          })}
      </ul>
      <p>Abilities:</p>
      <ul>
          {pokemon.abilities.map((o, index)=>{
            return(
              <li key={index}>{o.ability.name}</li>
            )
          })}
      </ul>
      <p>Stats:</p>
      <ul>
          {pokemon.stats.map((o, index)=>{
            return(
              <li key={index}>{`${o.stat.name}: ${o.base_stat}`}</li>
            )
          })}
      </ul>
      <Link to ={`/`}>
        <button style={{backgroundColor: "red"}}>back</button>
      </Link>
      
    </section>
    </>
  )
}

export default PokemonInformation