import React from "react";
import './style.css';

const NavBar = () => {
    return (
        <>
            <div className='container'>
                <h2 className='logo'>LEOFLIX</h2>
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Documentários</a>
                </nav>
            </div>
        </>
    )
}
export default NavBar;