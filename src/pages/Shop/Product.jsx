import React from 'react';
 const Product = (props) => {
    const {product,onAdd,addtoCart} = props
    return (
        <div>
            {/* <!-- Product image--> */}
            <img className="card-img-top" src={product.image } alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{product.name}</h5>
                        {/* <!-- Product reviews--> */}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill">*</div>
                            <div className="bi-star-fill">*</div>
                            <div className="bi-star-fill">*</div>
                            <div className="bi-star-fill">*</div>
                            <div className="bi-star-fill">*</div>
                        </div>
                        {/* <!-- Product price--> */}
                        ${product.price}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div  onClick={()=>onAdd(product)} className="text-center"><a className="btn btn-outline-dark mt-auto">Add to cart</a></div>
                </div>
        </div>
    )
 };
 export default Product;
