import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export default function Selected({setSeatsAvailable}) {
  const { id } = useParams();
  const [sessions, setSessions] = React.useState(undefined);
  const navigate = useNavigate()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`
    );
    promise.then((res) => setSessions(res.data));
    promise.catch((err) => console.log(err.data.response));
  }, []);

  function mostra(a){
    console.log(a.id)
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
    <div>
        {sessions.days.map((a,b) =>
        <Times>
        {sessions.days[b].weekday} - {sessions.days[b].date}
        <div>
        {sessions.days[b].showtimes.map((OBJ,index) => <button onClick={ () => mostra(OBJ)}>{sessions.days[b].showtimes[index].name}</button>)}
        </div>
        </Times>)}
    </div>
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

    }
`
