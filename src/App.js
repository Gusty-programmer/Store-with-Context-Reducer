import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainNav from "./Components/layout/MainNav";
import Produse from "./Pages/Produse";
import CosCumparaturi from "./Pages/CosCumparaturi";
import Oferte from "./Pages/Oferte";
import Details from './Components/sesions/Details';



function App() {

  return (
    
    <div>
      <MainNav  />
      <Routes>
      <Route path="/" exact element={<Produse />} />
      <Route path="/Cos" element={<CosCumparaturi />} />
        <Route path="/Oferte" element={<Oferte />} />
        <Route path="/:ID" element={<Details />} />
      </Routes>
      </div>
     
  );
}

export default App;
