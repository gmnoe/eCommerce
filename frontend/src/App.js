import React from 'react';
import './App.css';
import { PRODUCTS } from './app/shared/PRODUCTS';
import Product from './components/Product';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">eCommerce</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    <main>
        <div className="row center">
            {
                PRODUCTS.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    </main>
    <footer className="row center">
        All Rights Reserved
    </footer>
</div>
  );
}

export default App;
