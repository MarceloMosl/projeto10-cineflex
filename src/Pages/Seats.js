import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

export default function Seats({
  movieSelected,
  seatsAvailable,
  ids,
  setIds,
  setNameBuyer,
  setCPFBuyer,
  cpf,
  name,
  setseatsNumber,
  seatsNumber,
  time,
  date, clear
}) {
  const navigate = useNavigate();

  function mostraAi(value) {
    setIds([...ids, value.id]);
    setseatsNumber([...seatsNumber, value.name]);
  }

  function submitSeats(a) {
    a.preventDefault();

    const URL =
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    const obj = { ids, name, cpf };
    const promise = axios.post(URL, obj);
    promise.then((res) => navigate(`/sucesso/`));
    promise.catch((err) => console.log(err.response.data));
  }

  if (seatsAvailable === undefined) return <>Carregando...</>;
  return (
    <>
      <Head>
        <Link to={"/"}>
          <header onClick={clear}>CINEFLEX</header>
        </Link>
        <h1>Selecione o(s) assento(s)</h1>
    </Head>


      <Grid>
        {seatsAvailable.seats.map((a, b) => {
          if (a.isAvailable === true) {
            return (
              <Disponivel
                onClick={() => mostraAi(a, b)}
                key={b}
                verific={ids.includes(a.id)}
              >
                {a.name}
              </Disponivel>
            );
          } else {
            return (
              <Indisponivel disabled={true} key={b}>
                {a.name}
              </Indisponivel>
            );
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

      <Form onSubmit={submitSeats}>
        <label>
          Nome do Comprador:
          <input
            onChange={(e) => setNameBuyer(e.target.value)}
            type="text"
            placeholder="Digite seu nome..."
            required
          ></input>
        </label>
        <label>
          CPF do Comprador:
          <input
            onChange={(e) => setCPFBuyer(e.target.value)}
            type="number"
            placeholder="Digite seu CPF..."
            required
          ></input>
        </label>
        <button disabled={ids.length == 0} type="submit">
          Reservar Assento(s)
        </button>
      </Form>

      <Footer>
        <img src={movieSelected.posterURL}></img>
        <div>
          {movieSelected.title}
        <p>{date} {time}</p>
        </div>
      </Footer>
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
    cursor: pointer;
  }
`;
const Dispo = styled.div`
  display: flex;
  width: 300px;
  gap: 30px;
  margin: auto;
  margin-top: 30px;
  button {
    font-size: 11px;
    width: 26px;
    height: 26px;
    border: 1px solid #808f9d;
    border-radius: 50%;
  }
  div {
    text-align: center;
  }
`;
const Selecionado = styled.button`
  background-color: #1aae9e;
`;
const Disponivel = styled.button`
  background-color: ${(props) => (props.verific ? "#0E7D71" : "#C3CFD9")};
`;
const Indisponivel = styled.button`
  background-color: #fbe192;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  margin-top: 30px;
  width: 300px;
  input {
    width: 327px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
  button {
    margin: auto;
    width: 225px;
    height: 40px;
    background-color: #e8833a;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 50px;
  }
`;
const Footer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  font-size: 26px;
  bottom: 0;
  background-color: #9eadba;
  img {
    padding: 20px;
    width: 50px;
  }
`;
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