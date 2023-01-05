import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/product' element={<ProductPage />} />
                <Route path='/product/:productId' element={<ProductDetailPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;