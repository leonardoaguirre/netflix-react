import React from 'react';
import './App.css';
import NavBar from '../Navbar';
import Card from '../Card';
import CarouselFilmes from '../Carousel';
import MainCarousel from '../MainCarousel';
import './responsive.css'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <MainCarousel />
      </main>
      <CarouselFilmes title={'Destaques'} />
    </div>

  );
}


export default App;
