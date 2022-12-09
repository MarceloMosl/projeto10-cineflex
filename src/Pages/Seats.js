import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export default function Seats({ seatsAvailable }) {
  
 function mostraAi(a){
    console.log(a)

 } 
  
    if (seatsAvailable === undefined) return <>Carregando...</>;
  return (
    <>
      <Grid>
        {seatsAvailable.seats.map((a, b) => {
            if(a.isAvailable === true){
                return <Disponivel onClick={() => mostraAi(a)} id={b}> {a.name}</Disponivel>
            }else{
                return <Indisponivel disabled={true} onClick={() => mostraAi(a)} id={b}> {a.name}</Indisponivel>
            }
        })}
      </Grid>

      <Dispo>
        <div>
          <Selecionado></Selecionado>
          <p>Selecionado</p>
        </div>
        <div>
          <Disponivel></Disponivel>
          <p>Disponivel</p>
        </div>
        <div>
          <Indisponivel></Indisponivel>
          <p>Indisponivel</p>
        </div>
      </Dispo>
    </>
  );
}
const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  width: 300px;
  margin: auto;
  button {
    font-size: 11px;
    width: 26px;
    height: 26px;
    border: 1px solid #808f9d;
    border-radius: 50%;
  }
`;
const Dispo = styled.div`
display: flex;
width: 300px;
gap: 30px;
margin: auto;
margin-top: 30px;
button{
    font-size: 11px;
    width: 26px;
    height: 26px;
    border: 1px solid #808f9d;
    border-radius: 50%;
}
div{
    text-align: center;
}


`
const Selecionado = styled.button`
background-color: #1AAE9E;
`
const Disponivel = styled.button`
background-color: #C3CFD9;
`
const Indisponivel = styled.button`
background-color: #FBE192;
`