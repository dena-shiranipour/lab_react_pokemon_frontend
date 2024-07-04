import './App.css'
import PokemonContainer from './containers/PokemonContainer';
import { Outlet } from 'react-router-dom';



function App() {



  return (
    <>
      <h1>Pokedex</h1>
      <PokemonContainer />
    </>
  )
}

export default App
