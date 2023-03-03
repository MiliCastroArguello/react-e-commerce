import React from 'react'
import {ItemDetailContainer} from './Item/ItemDetailContainer'
import ItemListContainer from './Item/ItemListContainer'
import {Routes, Route } from "react-router-dom";
import Landing from './Landing';
import Contacts from './Contacts';



export const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/productos' element={<ItemListContainer />} />
        <Route exact path='/productos/:id' element={<ItemDetailContainer />} />
        <Route exact path='/ofertas' element={<ItemListContainer filter={'oferta'} />} />
        <Route exact path='/contacts' element={<Contacts />} />
      </Routes>
    </main>
  )
}