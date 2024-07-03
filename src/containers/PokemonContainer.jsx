import { useState, useEffect} from "react"
import PokemonThumbnail from "../components/PokemonThumbnal"

const PokemonContainer = () => {

  const [pokemons, setPokemons] = useState([]);

  const fetchAllPokemonsURLS = async () => {
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=500");
    const data = await response.json();
    return data;
  }

  const fetchAllPokemons = async () => {
    const pokemonsURLS = await fetchAllPokemonsURLS();
    console.log("results :"+ pokemonsURLS.results);
    const fetchPromises = pokemonsURLS.results.map((element)=> fetch(element.url));
    const responses = await Promise.all(fetchPromises);
    const jsonPromises = responses.map((element)=>element.json());
    const pokemonData = await Promise.all(jsonPromises);
    setPokemons(pokemonData);
  }

  useEffect(()=>{
    fetchAllPokemons()
  },[])
  
  console.log(pokemons);

  return(
    <>
      <h2>Hello from PokemonContainer</h2>
      {pokemons ? <PokemonThumbnail pokemons={pokemons}/> : "Fetching pokemons..."}
    </>
  )
}

export default PokemonContainer