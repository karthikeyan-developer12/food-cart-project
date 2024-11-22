import data from "./Data.json";
import React from "react";
import { useState } from "react";
import HomeProducts from "./HomeProducts";
import "./Homeproduct.css";
const Home = ({Cart,setCart}) =>{
const [datas] = useState(data);
    return(
    <div className="allproduct"> 
    { datas.map((product) => (
        
    <HomeProducts key={product.id} product={product} Cart={Cart} setCart={setCart}/>
        ))}
        
    </div>)
}
export default Home;