import "./Homeproduct.css"
import { useState } from "react";
const HomeProducts = ({product,Cart,setCart}) =>{
  
  const addCart = () =>{
    setCart([...Cart,product])
      console.log(Cart)
    

  }
  const removeCart = () =>{
    setCart((Cart.filter((item) => item.id!=product.id)))
  }


  return(<div className="product">
    <img src={product.image} alt={product.name}></img>
    
    <div className="details">
      <h3>{product.name}</h3>
      <p>{product.headline}</p>
      <span>
        { Cart.includes(product) ?<button onClick={removeCart}>Remove to cart</button>:
      <button onClick={addCart}>Add to cart</button> }
      
      </span>
    </div>
    
  </div>)
}
export default HomeProducts;