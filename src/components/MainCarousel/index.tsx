import React from "react";
import { Carousel } from "react-bootstrap";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import './style.css';

const MainCarousel: React.FC = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <div className='filme-principal'>
                        <div className="container">
                            <h3 className='titulo'>Game of Thrones</h3>
                            <p className="descricao">Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.</p>
                            <div className="botoes">
                                <button className='botao'><i><FaPlay /></i> Assistir agora</button>
                                <button className='botao'><i><FaInfoCircle /></i> Mais Informações</button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='filme-principal'>
                        <div className="container">
                            <h3 className='titulo'>assdasds</h3>
                            <p className="descricao">asda uma vida, sete nobres famíasdasd poder absoluto.</p>
                            <div className="botoes">
                                <button className='botao'><i><FaPlay /></i> Assistir agora</button>
                                <button className='botao'><i><FaInfoCircle /></i> Mais Informações</button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default MainCarousel;