import { Link, Outlet } from "react-router-dom"

const PokemonThumbnail = ({pokemons}) => {

  const handleClick = (index) => {
    return (
      <>
      {console.log("Running Handle Click")}
        <Link to="./information">Show more</Link>
        
      </>
      
    )
  }
  
  return(
    <>
      <section className="pokemonThumbnail">
        {
          pokemons.map((pokemon, index) => {
            return(
            <div key={index}>
                <h3>{pokemon.forms[0].name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.forms[0].name} />
                <p>Types:</p>
                <ul>
                  {pokemon.types.map((o, index)=>{
                    return(
                      <li key={index}>{o.type.name}</li>
                    )
                  })}
                </ul>
                <button onClick={()=>handleClick(index)} style={{backgroundColor: "lightblue"}}>More info</button>
            </div>
            )
          })
        }
      </section>
    </>
  )
}

export default PokemonThumbnail