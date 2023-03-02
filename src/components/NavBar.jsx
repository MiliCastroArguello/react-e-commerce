import React from 'react'
import CartWidget from '../CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand" href="./">MECA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to= {'/'}> Home</Link>
        </li>
        <li className="nav-item">
        <Link to= {'/Productos'}> Productos</Link>
        </li>
        <li className="nav-item">
        <Link to= {'/On Sale'}> On SALE!</Link>
        </li>
        <li className="nav-item">
        <Link to= {'/Contactanos'}> Contactanos</Link>
        </li>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>
    </>
  )
}

export default NavBar