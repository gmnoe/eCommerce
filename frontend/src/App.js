import React from 'react';
import './App.css';
import { PRODUCTS } from './app/shared/PRODUCTS';

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
                            <div key={product.id} className="card">
                            <a href={`/product/${product.id}`}>
                                {/* image size: 680px by 830px */}
                                <img className="medium" src={product.image} alt={product.name} />
                            </a>
                            <div className="card-body">
                                <a href={`/product/${product.id}`}>
                                    <h2>{product.name}</h2>
                                </a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                                <div className="price">
                                    ${product.price}
                                </div>
                            </div>
                        </div>
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
