import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';
import { fetchProducts } from './features/products/ProductsSlice';
import CartPage from './pages/CartPage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='signin' element={<SignInPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/cart/:productId' element={<CartPage />} />
                <Route path='/products' element={<ProductPage />} />
                <Route path='/products/:productId' element={<ProductDetailPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;