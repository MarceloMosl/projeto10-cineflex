
import { useNavigate, Link } from "react-router-dom";
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
      <Head>
        <Link to={"/"}>
          <header onClick={clear}>CINEFLEX</header>
        </Link>
        <h1>Pedido feito com sucesso!</h1>
    </Head>




      <MovieSession data-test="movie-info">
        <h1>Filme e Sessão</h1>
        <p>{movieSelected.title}</p>
        <p>{date} {time}</p>
      </MovieSession>
      <Tickets data-test="seats-info">
        <h1>Ingressos</h1>
        {seatsNumber.map((a) => <p key={a} >Assento {a}</p>)}
      </Tickets>
      <UserInfo data-test="client-info">
        <h1>Comprador</h1>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </UserInfo>
      <HomeSick data-test="book-seat-btn" onClick={() => {
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
    color: Green;
    margin-top: 50px;
  }
`;