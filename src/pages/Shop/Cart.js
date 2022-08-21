import React from 'react';
import CartContent from './CartContent';

const Cart = (props) =>{
    console.log("in cart the props are : ");
    console.log(props);
    const {count,onAdd,cartItems,onRemove} = props;
    return(
        // <div>{cartItems.length === 0 && <div>cart is empty</div>}</div>
                        <div className="modal fade" id="cartmodal" tabindex="-1" role="dialog" aria-labelledby="cartmodal" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <i className="bi-cart-fill me-1"></i>

                                                Cart<span className="badsge bg-dark text-white ms-1 rounded-pill">{count}</span>

                                        <div>
                                            <CartContent onRemove={onRemove} onAdd={onAdd} cartItems = {cartItems}/>
                                        </div>

                                        </div>
                                    </div>
                            </div>
                        </div>    );
}
export default Cart;
