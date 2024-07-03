import './App.css'
import PokemonContainer from './containers/PokemonContainer'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonInformation from './components/PokemonInformation';


function App() {

  const router = createBrowserRouter(

    [
      {
        path: "/",
        element: <PokemonContainer />,
        children: [
          {
            path: "/information",
            element: <PokemonInformation />
          }
        ]
      }
    ]

  )

  return (
    <>
      <h1>Pokedex</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
