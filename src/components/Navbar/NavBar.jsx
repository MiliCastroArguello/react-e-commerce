import React, {useEffect, useState} from 'react'
import CartWidget from '../CartWidget'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


const NavBar = () => {
  const [marcas, setData] = useState([]);

  useEffect(() => {
      fetch('../data/data.json')
        .then(response => response.json())
        .then((jsonData) => {
          const marcas = [];
          jsonData.forEach(prenda => {
            if(!marcas.includes(prenda.marca)) {
              marcas.push(prenda.marca)
            }
            setData(marcas)
          })
        })
        .catch((error) => console.log(error))
  }, []);
    return (
        <>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="/">MECA</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/prendas">Productos</Nav.Link>
                  <Nav.Link href="/ofertas">OnSale</Nav.Link>
                  <NavDropdown id="basic-nav-dropdown" title="Marcas">
                    {marcas.map(
                      marca => (
                        <NavDropdown.Item key={marca} href={'/marcas/' + marca}>{marca}</NavDropdown.Item>
                      )
                    )}
                  </NavDropdown>

                </Nav>
              </Navbar.Collapse>
              <CartWidget/>
            </Container>
          </Navbar>

        </>
      )
}

export default NavBar