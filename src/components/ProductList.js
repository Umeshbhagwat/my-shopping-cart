import React from 'react';

function ProductList({product,addToCart}) {
  
    // console.log(product); 
  return ( 
    <div className="products">
        {
      product.map((productItem,productIndex) =>{
        return(
       

 
  <div className="all-products">
    
    <img src={productItem.url} height="150px"/>
    <h4 className="product-title">{productItem.name}</h4>
      <div className="product-info">
      <h4>{productItem.category}</h4>
          <h4>{productItem.seller}</h4>
        <p className="product-price">{productItem.price} /-</p>
        <div class="buttons">
        <button  class="btn-hover color-1"
        onClick={()=>addToCart(productItem)}
        >Add To Cart</button>
       </div> 
      </div>
    </div>
    
        )
      })
    }
    </div>
  )
}

export default ProductList;