import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
export default function Movies(){
    const [movie, setMovie] =  React.useState([])

    useEffect(() => {
     const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
     promise.then((a) => setMovie(a.data) + console.log(movie))
     promise.catch(() => alert("erro na API"))   
        
    },[])


    return (
        <>
        <Head>
        <header>CINEFLEX</header>
        <h1>Selecione um filme</h1>
        </Head>

        <MovieList>
            <div>
            {movie.map((a,b) =>  
            <Link id={b} to={`/filme/${movie[b].id}`}>
            <img src={movie[b].posterURL} alt="deu erro"></img>
            </Link>
            
            )}
            </div>
        </MovieList>
        
        
        </>


    )

}

const MovieList = styled.div`
   div{
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    gap: 10px;

}

img{
    width: 200px;
    margin: auto;
}
`
const Head = styled.div`
display: flex;
flex-direction: column;
margin: auto;
header{
    height: 50px;
    background-color: #C3CFD9;
    color: #E8833A;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
}
h1{
    height: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    color: #293845;

}


`