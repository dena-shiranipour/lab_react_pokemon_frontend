import { useState, useEffect} from "react"
import PokemonThumbnail from "../components/PokemonThumbnail"
import { Outlet } from "react-router-dom";
//import Modal from 'react-modal';


const PokemonContainer = () => {


  const [pokemons, setPokemons] = useState([]);

  const fetchAllPokemonsURLS = async () => {
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=1302");
    const data = await response.json();
    return data;
  }

  const fetchAllPokemons = async () => {
    const pokemonsURLS = await fetchAllPokemonsURLS();
    const urlArray = pokemonsURLS.results.map((element)=> fetch(element.url));
    
    const responseArray = await Promise.all(urlArray);
    const unserialisedArray = responseArray.map((element)=>element.json());

    const pokemonData = await Promise.all(unserialisedArray);
    setPokemons(pokemonData);
  }

  useEffect(()=>{
    fetchAllPokemons()
  },[])
  
  console.log(pokemons);

  return(
    <>
    <Outlet />
    <hr />
      {pokemons ? <PokemonThumbnail pokemons={pokemons}/> : "Fetching pokemons..."}
      
    </>
  )
}

export default PokemonContainer