import React, { useState } from 'react';
import Navbar from './pages/Shop/Navbar';
import Main from './pages/Shop/Main';
import Data from './Data';
 
const Shop = () =>{
    const {products} = Data;
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(0)
    const onAdd = (product) => {
        setCount(count+1);
        const exist = cartItems.find(x => x.id === product.id);
        if(exist) {
            setCartItems(cartItems.map(y => y.id === product.id ? {...exist, qty: exist.qty +1} : y))
        }
        else{
            setCartItems([...cartItems,{...product, qty : 1}])

        }
    
    }
    const addtoCart = () =>{
        setCount(count+1);
    }
    const onRemove = (product)=>{
        setCount(count-1);
        const exist = cartItems.find(x => x.id === product.id);
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x)=> x.id !== product.id));
        }
        else{
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x))


        }

    }
    return (
        <div className="container">

        <Navbar onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} count={count}/>
            
            {/* <!-- Header--> */}
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Check these gems</h1>
                        <p className="lead fw-normal text-dark mb-0">fill these with imges of beats(artists) and audio preview</p>
                    </div>
                </div>
            {/* </header> */}
            
        <Main onAdd={onAdd}  products={products} addtoCart={addtoCart}/>
        
        
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
        </div>
    );
}
export default Shop;