import React from 'react';
import Cart from './Cart';
import CartContent from './CartContent';
 
export default function Navbar(props){
    console.log("in navbar the props are");
    console.log(props);
    const {count,onAdd,cartItems,onRemove} = props;
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
            <div className="container px-4  px-lg-5">
                <a className="navbar-brand" href="./">Put the Logo here</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="./">Home</a></li>
                        {/* <li className="nav-item"><a className="nav-link" href="#!">About</a></li> */}
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn text-light btn-dark">
                    <i className="bi-cart-fill me-1"></i>

                            Cart<span className="badsge bg-dark text-white ms-1 rounded-pill">{count}</span>

                    </button>
    
                    {/* <Cart onAdd={onAdd} onRemove={onRemove} count={count} cartItems={cartItems}/> */}

                </div>
               
            </div>
        </nav>
        <div>
                    <CartContent onRemove={onRemove} onAdd={onAdd} cartItems = {cartItems}/>
                </div>
        </div>
    )
}
