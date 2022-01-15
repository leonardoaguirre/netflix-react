import React from 'react';
import './App.css';
import { FaPlay, FaInfoCircle } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header>
        <div className='container'>
          <h2 className='logo'>LEOFLIX</h2>
          <nav>
            <a href="#">Inicio</a>
            <a href="#">Séries</a>
            <a href="#">Filmes</a>
            <a href="#">Documentários</a>
          </nav>
        </div>
      </header>
      <main>
        <div className='filme-principal'>
          <div className="container">
            <h3 className='titulo'>Game of Thrones</h3>
            <p className="descricao">Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.</p>
            <div className="botoes">
              <button role={'button'} className='botao'><i><FaPlay /></i> Assistir agora</button>
              <button role={'button'} className='botao'><i><FaInfoCircle /></i> Mais Informações</button>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}


export default App;
