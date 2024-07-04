import { useState } from "react";
import { useNavigate} from "react-router-dom"

const Search = ({pokemons, setPokemons, originalList}) => {
  const navigate = useNavigate();
  
  const [inputText, setInputText] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if(inputText === "") originalList();
        console.log("Error occured: line 11");
        const searchResult = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(inputText.toLowerCase().trim()));
        setPokemons(searchResult);
        navigate("/");
    };

    return(
        <>
          <form onSubmit={handleSearch}>
            <label htmlFor="search-field">Search for a pokemon : </label>
            <input type="text" id="search-field" placeholder="pokemon name" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
            <input type="submit" />
            <button onClick={()=>setInputText("")} style={{backgroundColor: "green"}}>reset</button>
        </form>
        <hr />
        </>
    )
}

export default Search