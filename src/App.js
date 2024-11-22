import React, { useState } from 'react';
import './Header.css';
import Home from './Home';
import CartItem from './Cart';

import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';

function App() {
  const[Cart,setCart] = useState([]);
  return (
    <Router>
    <div className="App">
      <header className='header'>
        <h3 className='heading'>U Cart</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/cart">Cart</Link></li>
      </ul>
      </header>
      
      <Routes>
        <Route path="/" element={
        
          <Home  Cart={Cart}  setCart={setCart}/>}/>
        <Route path="/cart" element={<CartItem Cart={Cart}  setCart={setCart}/>}/>
      </Routes>
      
    </div>
    </Router>

  );
}

export default App;
