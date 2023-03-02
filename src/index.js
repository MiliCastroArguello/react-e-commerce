import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExampleApi from './components/ExampleApi.jsx/ExampleApi';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacts from './components/Contactos/Contacts';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     {/* <NavBar /> */}
   <App/>
    {/*<Contacts/>*/}
     {/* <Button/>  */}
     {/* <CartWidget/>  */}
    {/* <ExampleApi/>*/}
     {/*<ItemDetailContainer/>*/}
  </>
);