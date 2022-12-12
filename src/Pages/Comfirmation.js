
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Comfirmation({
  name,
  cpf,
  seatsNumber,
  movieSelected,
  date,
  time,
  clear
}) {

  const navigate = useNavigate()




  return (
    <>
      <MovieSession>
        <h1>Filme e Sessão</h1>
        <p>{movieSelected}</p>
        <p>{date} {time}</p>
      </MovieSession>
      <Tickets>
        <h1>Ingressos</h1>
        {seatsNumber.map((a) => <p key={a} >Assento {a}</p>)}
      </Tickets>
      <UserInfo>
        <h1>Comprador</h1>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </UserInfo>
      <HomeSick onClick={() => {
        navigate("/")
        clear()
        }}>Voltar Para Holme</HomeSick>
    </>
  );
}
const MovieSession = styled.div`
  width: 220px;
  margin: auto;
  font-size: 20px;
  h1 {
    margin-bottom: 20px;
    color: #293845;
    font-weight: 700;
  }
`;
const Tickets = styled.div`
  width: 220px;
  margin: auto;
  font-size: 20px;
  margin-top: 15px;
  h1 {
    margin-bottom: 20px;
    color: #293845;
    font-weight: 700;
  }
`;
const UserInfo = styled.div`
  width: 220px;
  margin: auto;
  margin-top: 15px;
  font-size: 20px;
  h1 {
    margin-bottom: 20px;
    color: #293845;
    font-weight: 700;
  }
`;
const HomeSick = styled.button`
  width: 225px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  background-color: #e8833a;
  border: none;
  color: white;
`;
