import React from 'react'
import styled from 'styled-components';
import PokeImg from '../../assets/pokemonBannerText.png'
const StyledWrapper = styled.main`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:100%;
   height:100%;
`;
const StyledHeader = styled.h2`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   font-size:1rem;
   font-weight:700;
   @media screen and (min-width:750px){
    font-size:1.4rem;  
   }
   @media screen and (min-height:1020px) and (min-width:750px){
      font-size:1.6rem;
   }
`;
const StyledContainer = styled.section`
   display:flex;
   justify-content:center;
   width:100%;
   height:60%;
   @media (orientation:landscape){
      padding: 0 2.5px;
   }
`;

const StyledList = styled.ul`
   flex-basis:31%;
   font-size:.75rem;
   list-style:none;
   span{
      font-size:1rem;
      font-weight:700;
      @media screen and (min-height:1020px) and (min-width:750px){
      font-size:1.2rem
   }
      @media screen and (min-width:1020px){
      font-size:1.4rem;
   }
   }
   @media screen and (min-height:1020px) and (min-width:750px){
      font-size:1rem;
   }
   @media screen and (min-width:1020px){
      font-size:1.2rem;
   }

`;
const StyledHeaderImg = styled.img`
   width:30%;
   margin-top:5px;
   @media screen and (min-height:1020px) and (min-width:750px){
      width:40%;
   }
   @media screen and (min-width:1020px){
      width:40%;
   }
`;
const StyledPokemonImg = styled.img`
   @media screen and (min-height:1020px) and (min-width:750px){
      width:30%;
   }
   @media screen and (min-width:1020px){
      width:30%;
   }
`;
const PokemonView = ({ exp, stats, name, order, height, sprites, types, weight }) => {
   return (
      <StyledWrapper>
         <StyledHeaderImg src={PokeImg} alt="" />
         <StyledHeader>{order}. {name.toUpperCase()}</StyledHeader>
         <StyledPokemonImg src={sprites.front_default} alt="" />
         <StyledContainer>
            <StyledList>
               <span>Stats:</span>
               {stats.filter(slot => !slot.stat.name.includes('special')).map(slot => <li key={slot.stat.name}>- {slot.stat.name}:  <b>{slot.base_stat}</b></li>)}
            </StyledList>

            <StyledList>
               <span>Types:</span>
               {types.map(slot => <li key={slot.type.name}>- {slot.type.name}</li>)}
            </StyledList>

            <StyledList>
               <span>Attributes:</span>
               <li>- Height:  <b>{height}</b></li>
               <li>- Weight:  <b>{weight}</b></li>
               <li>- Experience:  <b>{exp}</b></li>
            </StyledList>
         </StyledContainer>

      </StyledWrapper>
   )
}

export default PokemonView
