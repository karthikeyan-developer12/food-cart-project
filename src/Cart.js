import './Cart.css'
const CartItem = ({Cart,setCart}) => {
    const remove = (productid) => {
        setCart(Cart.filter((element)=> element.id!==productid));

    }
    return(
        
       <div className="carts">
        {Cart.map((value) => (
            <div className='NEW' key={value.id}>
        <img src={value.image} alt="img" className='image'></img>
        <div className="details">
            <h1>{value.name}</h1>
            <h1>description </h1>
            <button onClick={() => remove(value.id)}>Removeitems</button>
        </div>
        
    </div>))}
   
    <h1 className='total'>Total RS:</h1> 
    <h1>total itmes : {Cart.length}</h1>
    </div>)

}
export default CartItem;