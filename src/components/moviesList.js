import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
export default function Movies({setMovieSelected}){
    const [movie, setMovie] =  React.useState([])

    useEffect(() => {
     const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
     promise.then((a) => {
        setMovie(a.data)
    })
     promise.catch((res) => alert(res.data.response))   
        
    },[])


    return (
        <>

        <MovieList>
            <div>
            {movie.map((a,b) =>  
            <Link id={b} to={`/filme/${movie[b].id}`}>
            <img src={movie[b].posterURL} alt="deu erro" onClick={() => setMovieSelected(movie[b].title)}></img>
            </Link>
            )}
            </div>
        </MovieList>
        
        
        </>


    )

}

const MovieList = styled.div`
background-color: gray;
padding-top: 20px;
   div{
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    gap: 10px;

}
a{
    margin: auto;
}

img{
    width: 200px;
    margin: auto;
}
`