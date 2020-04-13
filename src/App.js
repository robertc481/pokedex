import React, { useState, useEffect } from 'react';
import PokeList from './components/PokeList/PokeList';
import DetailsView from './components/DetailsView/DetailsView';
import './App.css';
import Header from './components/Header/Header';
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsInList] = useState(5);
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({});
  const [filterInputValue, setFilterInputValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807`)
        .then(res => res.json())
        .then(pokemon => setPokemons(pokemon.results));
      setLoading(false);
    }
    getPokemons()
  }, [])

  //
  const indexOfLastPokemon = currentPage * pokemonsInList;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsInList;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const changePage = (number) => setCurrentPage(number);
  const selectPokemon = (item) => setSelectedPokemonName(item.name);

  return (
    <div className="App">
      {selectedPokemonName ?
        <DetailsView selectedPokemon={selectedPokemonName} selectedPokemonDetails={selectedPokemonDetails} setSelectedPokemonDetails={setSelectedPokemonDetails} /> :
        <Header />
      }
      <PokeList pokemons={filterInputValue === '' ? currentPokemons : pokemons} loading={loading} currentPage={currentPage} setCurrentPage={setCurrentPage} allPokemons={pokemons.length} pokemonsInList={pokemonsInList} changePage={changePage} selectPokemon={selectPokemon}
        setPokemons={setPokemons}
        inputValue={filterInputValue}
        setFilterInputValue={setFilterInputValue}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        setSelectedPokemonDetails={setSelectedPokemonDetails}
        setSelectedPokemonName={setSelectedPokemonName} />

    </div>
  );

}

export default App;

