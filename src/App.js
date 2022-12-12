import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Movies from "./components/moviesList";
import Selected from "./Pages/Selected";
import styled from "styled-components";
import Seats from "./Pages/Seats";
import React from "react";
import Comfirmation from "./Pages/Comfirmation";

function App() {
  const [seatsAvailable, setSeatsAvailable] = React.useState(undefined);
  const [ids, setIds] = React.useState([]);
  const [name, setNameBuyer] = React.useState("");
  const [cpf, setCPFBuyer] = React.useState("");
  const [movieSelected, setMovieSelected] = React.useState("")
  const [date, setDate] = React.useState("")
  const [time, setTime] = React.useState("")
  const [seatsNumber, setseatsNumber] = React.useState([]);

  function clear(){
    setSeatsAvailable(undefined)
    setIds([])
    setNameBuyer("")
    setCPFBuyer("")
    setMovieSelected("")
    setDate("")
    setTime("")
    setseatsNumber([])
  }


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Head>
        <Link to={"/"}>
          <header onClick={clear}>CINEFLEX</header>
        </Link>
        <h1>Selecione um filme</h1>
      </Head>
      <Routes>
        <Route path="/" element={<Movies setMovieSelected={setMovieSelected}/>} />
        <Route
          path="/filme/:id"
          element={<Selected setSeatsAvailable={setSeatsAvailable} 
          setDate={setDate}
          setTime={setTime}
          />}
        />
        <Route
          path="/seats/:idSeats"
          element={
            <Seats
              seatsAvailable={seatsAvailable}
              ids={ids}
              setIds={setIds}
              setNameBuyer={setNameBuyer}
              setCPFBuyer={setCPFBuyer}
              name={name}
              cpf={cpf}
              seatsNumber={seatsNumber}
              setseatsNumber={setseatsNumber}
            />
          }
        />
        <Route path="/finalizar/" element={<Comfirmation
        name={name}
        cpf={cpf}
        seatsNumber={seatsNumber}
        movieSelected={movieSelected}
        date={date}
        time={time}
        clear={clear}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  a {
    text-decoration: none;
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
  }
`;
