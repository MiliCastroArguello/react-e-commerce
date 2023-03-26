import React, { useEffect, useState } from 'react';
import CartWidget from '../CartWidget';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { getPrendas } from '../../Database/dataBase';

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
      <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navbar bg='light' expand='lg'>
          <Container fluid>
            <Navbar.Brand href='/'>
              <div className={'col'}>
                <img id={'foto-portada'} src='./imagenes/mecalogo.jpg' alt='MECA' />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/prendas'>Productos</Nav.Link>
                <Nav.Link href='/ofertas'>OnSale</Nav.Link>
                <NavDropdown id='basic-nav-dropdown' title='Marcas'>
                  {marcas.map((marca) => (
                    <NavDropdown.Item key={marca} href={'/marcas/' + marca}>
                      {marca}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <CartWidget />
          </Container>
        </Navbar>
        <button onClick={toggleDarkMode}>Modo Oscuro</button>
      </nav>
    </>
  );
};

export default NavBar;