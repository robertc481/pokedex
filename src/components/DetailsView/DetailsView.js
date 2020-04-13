import React, { useEffect } from 'react'
import styled from 'styled-components';
import PokemonView from '../PokemonView/PokemonView';

const StyledWrapper = styled.div`
   background-color:white;
   width:100%;
   height:50%;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   border-top:10px solid red;
   border-bottom:2px solid red;
   border-left:20px solid red;
   border-right:20px solid red;
   box-shadow:inset 0 0 0px 1px black;
   @media (orientation:landscape) {
   height: 95%;
   }
`
const DetailsView = ({ selectedPokemon, selectedPokemonDetails, setSelectedPokemonDetails }) => {

   useEffect(() => {

      const getPokemoneDetails = async (pokemon) => {
         await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then(pokemonDetails => {

               return setSelectedPokemonDetails(pokemonDetails)
            })




      }
      getPokemoneDetails(selectedPokemon)
   }, [selectedPokemon, setSelectedPokemonDetails])

   const { base_experience, stats, name, order, height, sprites, types, weight } = selectedPokemonDetails;

   return (
      <StyledWrapper>
         {Object.keys(selectedPokemonDetails).length > 0 ? <PokemonView
            order={order}
            stats={stats}
            name={name}
            height={height}
            sprites={sprites}
            types={types}
            exp={base_experience}
            weight={weight} /> : null}
      </StyledWrapper>
   )
};

export default DetailsView;