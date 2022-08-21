import React from 'react'

export default function CartContent(props) {
    console.log("in cartcontent the props are ");
    console.log(props);
   const {cartItems,onRemove,onAdd} = props;
  return (
    <div>
            <div className="  d-flex flex-row  mx-2 container p-2">
                {cartItems.length === 0 && <div>cart khawya daba</div>}
                {cartItems.map((item) => 
                    <div className='bg-dark text-light container' key={item.id}>
                        <hr/>
                        <div>
                            <div>{item.name}</div>

                        </div>
                        <hr />
                        <div>
                            <button className="bg-success" onClick={() => onAdd(item) }>+</button>
                            <button className="bg-daner" onClick={()=> onRemove(item) }>-</button>
                        </div>


                        <div>
                            {item.qty} * {item.price.toFixed(2)}
                        </div>


                    </div>
                )}
            </div>
            <div className='bg-warning' onClick={console.log("we workin on it")}>Checkout</div>


    </div>
  )
}
