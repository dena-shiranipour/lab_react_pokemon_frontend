import { useState } from "react"
import PokemonThumbnail from "../components/PokemonThumbnal"

const PokemonContainer = () => {

  const [pokemons, setPokemon] = useState([])

  

  return(
    <>
      <h2>Hello from PokemonContainer</h2>
      <PokemonThumbnail />
    </>
  )
}

export default PokemonContainer