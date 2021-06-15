import React from 'react';
import data from './Data';

function App() {
return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">TvM Shop</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <main>
            <div className="row center">
                {data.products.map((product) => (
                        <div key={product._id}  className="card">
                            <a href={`/product/${product._id}`}>
                                <img 
                                src={product.image} 
                                alt={product.name}
                                />
                            </a>
                            <div className="card-body">
                                <a href={`/product/${product._id}`}>
                                    <h2>{product.name}</h2>
                                </a>
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
            Allright reserved
        </footer>
    </div>
);
}

export default App;
