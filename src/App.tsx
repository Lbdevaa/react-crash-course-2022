// import { useContext, useState } from 'react';
// import { CreateProduct } from './components/CreateProduct';
// import { ErrorMessage } from './components/ErrorMessage';
// import { Loader } from './components/Loader';
// import Modal from './components/Modal';
// import Product from './components/Product'
// import { ModalContext } from './context/ModalContext';
// import { useProducts } from './hooks/products';
// import { IProduct } from './models';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';

import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App;
