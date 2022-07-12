import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import React from 'react';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Header from './Components/Header/NavBar'



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>  
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:productosId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
