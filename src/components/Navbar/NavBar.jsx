import React, { useEffect, useState } from 'react';
import CartWidget from '../CartWidget';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { getPrendas } from '../../Database/dataBase';
import {LinkContainer} from 'react-router-bootstrap'
import Cart from "../Cart/Cart";

const NavBar = () => {
  const [marcas, setData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    getPrendas()
      .then((jsonData) => {
        const marcas = [];
        jsonData.forEach((prenda) => {
          if (!marcas.includes(prenda.marca)) {
            marcas.push(prenda.marca);
          }
          setData(marcas);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark-mode');

  }

  return (
    <>
        <Navbar className={`navbar ${isDarkMode ? 'dark-mode' : ''}`} bg='light' expand='lg'>
          <Container fluid>
            <Navbar.Brand href='/'>
              <div className={'col'}>
                <img id={'foto-portada'} src='/imagenes/mecalogo.jpg' alt='MECA' />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
              <Nav>
                <LinkContainer to='/'><Nav.Link >Home</Nav.Link></LinkContainer>
                <LinkContainer to='/prendas'><Nav.Link>Productos</Nav.Link></LinkContainer>
                <LinkContainer to='/ofertas'><Nav.Link>OnSale</Nav.Link></LinkContainer>
                <NavDropdown id='basic-nav-dropdown' title='Marcas'>
                  {marcas.map((marca) => (
                    <LinkContainer to={'/marcas/' + marca} key={marca}>
                      <NavDropdown.Item>
                        {marca}
                      </NavDropdown.Item>
                    </LinkContainer>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <CartWidget />
            <button className={'dark-mode-toggle'} onClick={toggleDarkMode}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-moon-fill" viewBox="0 0 16 16">
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
              </svg>
            </button>
          </Container>
        </Navbar>
      <Cart />
    </>
  );
};

export default NavBar;