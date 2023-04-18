import React from 'react'
import {ItemDetailContainer} from './Item/ItemDetailContainer'
import ItemListContainer from './Item/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Cart from './Cart/Cart';
import { CartProvider } from './Context/CartContext';


export const Main = () => {
  return (
    <CartProvider>

    <main>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/prendas' element={<ItemListContainer />} />
        <Route exact path='/prendas/:id' element={<ItemDetailContainer />} />
        <Route exact path='/ofertas' element={<ItemListContainer filter={'oferta'} />} />
        <Route exact path='/marcas/:marca' element={<ItemListContainer filter={'marca'} />} />
        <Route exact path='/carrito' element={<Cart/>}/>

      </Routes>
    </main>
    </CartProvider>
  )
}

