import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
export default function Movies({setMovieSelected, clear}){
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
        <Head>
        <Link to={"/"}>
          <header onClick={clear}>CINEFLEX</header>
        </Link>
        <h1>Selecione um filme</h1>
        </Head>

        <MovieList>
            <div>
            {movie.map((a,b) =>  
            <Link id={b} to={`/sessoes/${a.id}`}>
            <img src={movie[b].posterURL} alt="deu erro" onClick={() => setMovieSelected(movie[b])}></img>
            </Link>
            )}
            </div>
        </MovieList>
        
        
        </>


    )

}

const MovieList = styled.div`
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
const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  a {
    text-decoration: none;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  header {
    height: 50px;
    background-color: #c3cfd9;
    color: #e8833a;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
  }
  h1 {
    height: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    color: #293845;
    margin-top: 50px;
  }
`;