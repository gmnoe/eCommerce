import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<ProductPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;