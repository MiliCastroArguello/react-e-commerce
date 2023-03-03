import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Main} from "./components/Main";
import NavBar from "./components/Navbar/NavBar";
import Landing from './components/Landing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <NavBar />
      <Main />
      
    </BrowserRouter>
  </>
);