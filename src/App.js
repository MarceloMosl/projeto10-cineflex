import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Movies from './components/moviesList';
import Selected from './Pages/Selected';
import styled from 'styled-components';
import Seats from './Pages/Seats';
import React from 'react';


function App() {
    const [seatsAvailable, setSeatsAvailable] = React.useState(undefined)
  return (
    <BrowserRouter>
    <GlobalStyle/>
	<Head>
		<Link to={"/"}>
        <header>CINEFLEX</header></Link>
        <h1>Selecione um filme</h1>
    </Head>
    <Routes>
    <Route path="/" element={<Movies/>} />
	<Route path="/filme/:id" element={<Selected setSeatsAvailable={setSeatsAvailable}/>} />
    <Route path="/seats/:idSeats" element={<Seats seatsAvailable={seatsAvailable}/>} />
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
`
const Head = styled.div`
display: flex;
flex-direction: column;
margin: auto;
a{
	text-decoration: none;
}
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

}`