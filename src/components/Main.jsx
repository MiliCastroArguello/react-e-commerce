import React from 'react'
import {ItemDetailContainer} from './Item/ItemDetailContainer'
import ItemListContainer from './Item/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import { CartProvider } from './Context/CartContext';
import NavBar from "./Navbar/NavBar";


export const Main = () => {
  return (
    <CartProvider>
      <NavBar />
      <main>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/prendas' element={<ItemListContainer />} />
          <Route exact path='/prendas/:id' element={<ItemDetailContainer />} />
          <Route exact path='/ofertas' element={<ItemListContainer filter={'oferta'} />} />
          <Route exact path='/marcas/:marca' element={<ItemListContainer filter={'marca'} />} />
          {/*<Route exact path='/carrito' element={<Cart/>}/>*/}

        </Routes>
      </main>
    </CartProvider>
  )
}

