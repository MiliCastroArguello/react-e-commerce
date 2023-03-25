import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Main} from "./components/Main";
import NavBar from "./components/Navbar/NavBar";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNNF6XYbIXry2hZu0JW-3Jtt54BtJ-dx8",
  authDomain: "react-e-commerce-ccd53.firebaseapp.com",
  projectId: "react-e-commerce-ccd53",
  storageBucket: "react-e-commerce-ccd53.appspot.com",
  messagingSenderId: "236284074995",
  appId: "1:236284074995:web:6b0c31870a273ebaea1086"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <NavBar />
      <Main />
    </BrowserRouter>
  </>
)