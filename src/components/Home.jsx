import { Outlet } from "react-router-dom";
import Search from "./Search";

const Home = ({pokemons, setPokemons, originalList}) => {
    return(
        <> 
    
            <section>
            <Search pokemons={pokemons} setPokemons={setPokemons} originalList={originalList}/>
                <Outlet />
            </section>
            
        </>
    )
}

export default Home;