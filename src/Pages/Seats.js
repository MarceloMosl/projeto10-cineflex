import React from "react";
import styled from "styled-components";

export default function Seats({ seatsAvailable }) {
  const [verify, setVerify] = React.useState([]);

  function mostraAi(value) {
    setVerify([...verify, value.id]);
  }

  if (seatsAvailable === undefined) return <>Carregando...</>;
  return (
    <>
      <Grid>
        {seatsAvailable.seats.map((a, b) => {
          if (a.isAvailable === true) {
            return (
              <Disponivel
                onClick={() => mostraAi(a, b)}
                id={b}
                verific={verify.includes(a.id)}
              >
                {" "}
                {a.name}
              </Disponivel>
            );
          } else {
            return (
              <Indisponivel disabled={true} id={b}>
                {" "}
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

      <Form>
        <label>
          {" "}
          Nome do Comprador:
          <input type="text" placeholder="Digite seu nome..." required></input>
        </label>
        <label>
          {" "}
          CPF do Comprador:
          <input type="number" placeholder="Digite seu CPF..." required></input>
        </label>
        <button disabled={verify.length == 0} type="submit">
          Reservar Assento(s)
        </button>
      </Form>
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
  }
`;
