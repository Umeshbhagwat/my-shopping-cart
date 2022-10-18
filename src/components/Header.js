
import React from 'react'
import '../index.css';

function Header(props) {
  return (
   <div className="flex shopping-card">    
       <div onClick={()=>props.handelShow(false)} className='logo'> Shopping Cart App </div>
    
    <div className='cartCounter'>
        <img src="./cart.jpg" height='40px' width='40px' alt="logo"  onClick={()=>props.handelShow(true)}/>
        <sup > {props.count}</sup>
        
    </div>
   </div>
  )
}

export default Header