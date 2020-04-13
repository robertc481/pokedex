import React from 'react';
import styled from 'styled-components';
import banner from '../../assets/pokemonBannerText2.png';

const StyledWrapper = styled.div`
   width: 100%;
   height: 50%;
   display:flex;
   justify-content:center;
   align-items:center;
   position:relative;
   @media (orientation:landscape) {
   height: 100%;
   }
`;
const StyledContainer = styled.div`
   width: 50%;
   max-width:200px;
   height:20%;
   position:absolute;
   top:2%;
   left:4%;
`;
const StyledDiv = styled.div`
   height:3rem;
   width:3rem;
   background-color:hsl(220,60%,30%);
   border-radius:50%;
   border:1.5px solid black;
   box-shadow:inset 0 0 0 5px hsl(200,20%,95%);
   position: absolute;
   top:5%;
   left:5%;
   ::before{
      content:'';
      position:absolute;
      width:.7rem;
      height:.7rem;
      background-color:rgba(250,250,250,0.75);
      border-radius:50%;
      top:25%;
      left:25%;
   }
   ::after{
      content:'';
      position:absolute;
      width:1.6rem;
      height:1.6rem;
      background-color:rgba(250,250,250,0.15);
      border-radius:50%;
      bottom:30%;
      right:30%;
   }     
`;
const StyledSmallDiv = styled.div`
   height:1rem;
   width:1rem;   
   border-radius:50%;
   border:1.5px solid black;
   position: absolute;
   top:5%;
   ::before{
      content:'';
      position:absolute;
      width:.3rem;
      height:.3rem;
      background-color:rgba(250,250,250,0.55);
      border-radius:50%;
      top:10%;
      left:15%;
   }
   left: ${({ left }) => left};
   background-color:${({ bgc }) => bgc};
`;

const Header = () => {
   return (

      <StyledWrapper>
         <img src={banner} alt="Pokemons Header" style={{ width: '90%' }} />
         <StyledContainer>
            <StyledDiv />
            <StyledSmallDiv left='40%' bgc='hsl(0,100%,45%)' />
            <StyledSmallDiv left='55%' bgc='hsl(45,90%,60%)' />
            <StyledSmallDiv left='70%' bgc='hsl(125,50%,60%)' />

         </StyledContainer>
      </StyledWrapper>

   )
}

export default Header
