import { data } from "jquery";
import React from "react";
import Product from "./Product";
const Main = (props) => {
    const {products,onAdd,addtoCart} = props;
    return (
<section className="py-5">
<div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
       {products.map((product) =>(
        <Product key={product.id} product ={product} onAdd={onAdd} addtoCart={addtoCart} />
       ))}
    </div>
</div>
</section>
);
        
};
export default Main;