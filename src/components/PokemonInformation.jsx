import { useNavigate, useLoaderData } from "react-router-dom"

const PokemonInformation = () => {

  const navigate = useNavigate();

  const pokemon = useLoaderData();
  
  return(
    <>
      <h3>Hello from PokemonInformation</h3>
      <p>pokemon id : {pokemon.id}</p>
    </>
  )
}

export default PokemonInformation