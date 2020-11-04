import { useState, useEffect } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';



function App() {

  //house and manages all pokemon being brought in
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // console.log("GOTTA CATCH EM ALL!!!")
    // Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    //   .then(res => setPokemon(res.data.results))
    //   .catch(err => console.log(err))
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //   .then(res => res.json())
    //   .then(res => setPokemon(res.results))
    //   .catch(err => console.log(err))
  },[])

  const getPokemon = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => setPokemon(res.data.results))
      .catch(err => console.log(err))
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //   .then(res => res.json())
    //   .then(res => setPokemon(res.results))
    //   .catch(err => console.log(err))

  }

  return (
    <div className="App">
      <button
        className="btn btn-danger"
        onClick={getPokemon}
      >Fetch Pokemon!</button>
      <div className= "d-flex flex-column justify-content-center">
        {
          pokemon.map((pokemon, i) => {
            return <PokemonCard
              pokemon={pokemon}
              key={i}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;
