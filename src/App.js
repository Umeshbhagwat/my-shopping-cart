import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Data from "./components/Data";
import CartList from "./components/CartList";
function App() {

  const [product,setProduct]=useState(Data)
  const [cart,setCart]=useState([])
  
const [showCart,setShowCart]=useState(false);

  const addToCart=(data)=>{
    setCart([...cart,{...data,quantity :1 }])
    console.log(cart)
  }

  const handelShow=(value)=>{
       setShowCart(value)
  }
  return (
    <div className="App">
      <Header count={cart.length} handelShow ={handelShow}/>
      {
        showCart ?
        <CartList cart={cart}/>:
        <ProductList product={product} addToCart={addToCart}/>
      }

    </div>
  );
} 

export default App;
