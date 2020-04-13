import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   width: 100%;
   height: 50%;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:space-evenly;
   span{
      padding:0;
   }
   @media (orientation:landscape) {
   height: 100%;
   
   border-left:1.5px solid black;
   }
`
const StyledFilters = styled.section`
   width:100%;
   display:flex;
   flex-direction:column;
   align-items:center;
`;
const StyledInfo = styled.div`
   width:80%;
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:center;
   font-size:1rem;
   @media (orientation:landscape) {
   font-size:.75rem;
   margin-top:5px;
   }
   @media screen and (min-height:1020px) and (min-width:750px){
      font-size:1.4rem;
   }
    @media screen and (min-width:1020px){
      font-size:1.2rem;
   }

`;

const StyledList = styled.main`
   width:100%;
   height:65%;
   display:flex;
   justify-content:center;
   
   
   ul{
      width: 70%;
      border:1px solid black;
      overflow-y:scroll;
      overflow-x:hidden;
      display:flex;
      flex-direction:column;
      list-style:none;
      background-color:white;
      
      li{
         width:100%;
         height:20%;
         padding: 5px 0;
         font-size:1.2rem;
         display:flex;
         justify-content:center;
         align-items:center;
         cursor:pointer;
      
         .selected{
            color:white;
            text-shadow: 0px 0p 1px black;
         }
        
      &:nth-child(odd){
         background-color:rgba(200,200,200,0.5);
         }
      }
   }
`;

const StyledButtonWrapper = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:space-evenly;
   height: 100%;
   width: 5%;
   button{
      font-size:2.5rem;
      font-weight:bold;
      background: none;
      border:none;
      cursor: pointer;
      margin-left:25px;

   }

   div{
      width:100%;
      height:50%;
      margin-left:25px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      button{
         font-size:1.5rem;
         margin:0;
      }
      input{
         width:100%;
         min-width:35px;
         height:30%;
         border:1.5px solid black;
         text-align:center;
         
      }
      input[type=number],
      input[type=number]::-webkit-inner-spin-button, 
      input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none;       
      -moz-appearance: textfield;
      margin: 0; 
      }
   }
`

const StyledInputContainer = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   width:75%;
   button{
      cursor:pointer;
      height:25px;
      padding:2px;
      background:none;
      background-color:White;
      border:1px solid black;
   }
   input{
      height: 25px;
      width:90%;
      border:1px solid black;
      font-size:.8rem;
      padding:2.5px;
      
      @media (orientation:landscape){
         font-size:.55rem;
      }
      @media screen and (min-height:1020px) and (min-width:750px){
      font-size:1rem;
   }
      @media screen and (min-width:1020px){
      font-size:1rem;
   }
   }
`;

const PokeList = ({ setSelectedPokemonName, setSelectedPokemonDetails, inputValue, setFilterInputValue, pokemons, setPageNumber, pageNumber, loading, currentPage, setCurrentPage, allPokemons, pokemonsInList, changePage, selectPokemon }) => {
   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(allPokemons / pokemonsInList); i++) {

      pageNumbers.push(i)
   }
   if (loading) {
      return <h2>Loading...</h2>
   }

   return (
      <StyledWrapper>
         <StyledFilters>
            <StyledInputContainer>
               <input type="text" value={inputValue} placeholder='Use it to filter pokemons!' onChange={(event) => setFilterInputValue(event.target.value)} />
               <button onClick={() => {
                  setSelectedPokemonDetails({})
                  setSelectedPokemonName(null)
                  setFilterInputValue('')
               }}>Reset</button>
            </StyledInputContainer>
            <StyledInfo>
               <span>Choose one for more details!</span>
            </StyledInfo>

         </StyledFilters>
         <StyledList>
            <ul >
               {pokemons.filter(item => item.name.includes(inputValue.toLowerCase())).map((item, index) => <li
                  onClick={() => selectPokemon(item)}
                  key={index}
                  id={item.name}>{item.name}</li>)}
            </ul>
            <StyledButtonWrapper>
               <button onClick={() => currentPage > 1 ? changePage(parseInt(currentPage) - 1) : null}>&uarr;</button>

               <div>
                  <input type="number" value={pageNumber} onChange={(event) => setPageNumber(event.target.value)} />
                  <button onClick={() => setCurrentPage(pageNumber)}>✔</button>
               </div>

               <button onClick={() => currentPage <= 162 ? changePage(parseInt(currentPage) + 1) : null}>&darr;</button>
            </StyledButtonWrapper>
         </StyledList>
         {inputValue === '' ? <span>{`Page ${currentPage} of ${pageNumbers.length}`}</span> : null}
      </StyledWrapper>
   )
};

export default PokeList;