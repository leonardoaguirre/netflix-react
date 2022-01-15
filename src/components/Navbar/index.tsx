import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './style.css';

const NavBar: React.FC = () => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                className="justify-content-space-between">
                <Nav>
                    <Navbar.Brand href="#home">
                        <h2 className='logo'>LEOFLIX</h2>
                    </Navbar.Brand>
                </Nav>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-space-between">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/">Séries</Nav.Link>
                        <Nav.Link href="/">Filmes</Nav.Link>
                        <Nav.Link href="/">Documentários</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default NavBar;