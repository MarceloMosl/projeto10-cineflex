import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export default function Selected({setSeatsAvailable, setDate, setTime, movieSelected, clear}) {
  const { idFilme } = useParams();
  const [sessions, setSessions] = React.useState(undefined);
  const navigate = useNavigate()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((res) => setSessions(res.data));
    promise.catch((err) => console.log(idFilme) );
  }, []);

  function mostra(a){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${a.id}/seats`)
    promise.then(res => {
      setSeatsAvailable(res.data)
      navigate(`/seats/${a.id}`)
    })
    promise.catch(err => console.log(err.data.response))

  }

  if(sessions === undefined){return <>Carregando...</>}

  return (
  <>
    <Head>
        <Link to={"/"}>
          <header onClick={clear}>CINEFLEX</header>
        </Link>
        <h1>Selecione o Horario</h1>
    </Head>

    <div>
        {sessions.days.map((a,b) =>
        <Times key={b}>
        {sessions.days[b].weekday} - {sessions.days[b].date}
        <div>
        {sessions.days[b].showtimes.map((OBJ,index) =><button 
        onClick={() => {
          mostra(OBJ) 
          setDate(sessions.days[b].weekday)
          setTime(sessions.days[b].date)
        }}
        >
          {sessions.days[b].showtimes[index].name}
        </button>)}
        </div>
        </Times>)}
    </div>
    <Footer>
        <img src={movieSelected.posterURL}></img>
        <p>{movieSelected.title}</p>

    </Footer>
  </>
  
  
  )
}
const Times = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 50px;
    div{
        display: flex;
        gap: 30px;
    }
    button{
        width: 83px;
        height: 43px;
        border-radius: 3px;
        border: none;
        background: #E8833A;
        border-radius: 3px;
        cursor: pointer;

    }
`
const Footer = styled.div`
position: sticky;
display: flex;
align-items: center;
font-size: 26px;
bottom: 0;
background-color:#9EADBA;
img{
  padding: 20px;
  width: 80px;
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
