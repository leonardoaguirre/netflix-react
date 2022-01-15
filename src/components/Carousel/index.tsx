import React from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import './style.css';
const capa = require('../app/capa.jpg')

const CarouselFilmes: React.FC<{ title: string }> = (props) => {
    const { title } = props
    return (
        <div className="carousel-filmes">
            <h3>{title}</h3>
            <Carousel show={3.5}
                slide={3}
                infinite={true}
                responsive={true}
                swiping={true}
                className='carousel'>
                <img className='capas' src={capa} alt="" />
                <img className='capas' src={capa} alt="" />
                <img className='capas' src={capa} alt="" />
                <img className='capas' src={capa} alt="" />
                <img className='capas' src={capa} alt="" />
                <img className='capas' src={capa} alt="" />
                <img className='capas' src={capa} alt="" />
            </Carousel>
        </div>
    )
}
export default CarouselFilmes;