import React from 'react'
import NavBar from './NavBar/NavBar'
import Button from './Button/Button'
import ItemListContainer from './ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './ItemDetailContainer';
import Contacts from '../components/Contactos/Contacts';


const App = () => {
  return <>
  <BrowserRouter>
  <NavBar />
  <Button/>
  <ItemListContainer  greeting= "Bienvenidos a MECA, una libreria on-line"/> 
  <ItemDetailContainer/>
  <Routes>
        <Route exact path="/" element={<NavBar />} />
        <Route exact path="/Contactos" element={<Contacts />} />
        <Route exact path="/Productos/:id" element={<ItemDetailContainer />} />
  </Routes>
  </BrowserRouter>
</>
}


export default App
