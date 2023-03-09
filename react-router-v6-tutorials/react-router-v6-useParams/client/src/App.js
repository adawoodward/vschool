import React from 'react' //Step 1
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; //Step 2
import Home from './components/Home.js' // Step 8
import About from './components/About.js' // Step 10
import Products from './components/Products.js' //NAV Example
import Checkout from './components/Checkout.js' //NAV Example
import ProductDetails from './components/ProductDetails.js' //Params 1
 
export default function App() { // Step 3
    return ( // Step 4

        <Router> {/*Step 5*/}

            <nav style={{ margin: 10 }}> {/*Step 11*/}
                <Link to="/" style={{ padding: 5 }}> {/*Step 12*/}
                Home
                </Link> {/*Step 12*/}
                <Link to="/about" style={{ padding: 5 }}> {/*Step 13*/}
                About
                </Link>{/*Step 13*/}
                <Link to="/products" style={{ padding: 5 }}> {/*Step 13*/}
                Products
                </Link>{/*Step 13*/}
            </nav> {/*Step 11*/}
            
            <Routes> {/*Step 6*/}
                <Route path ="/" element={<Home />} /> {/*Step 7*/}
                <Route path ="/about" element={<About />} /> {/*Step 9*/}
                <Route path ="/products" element={<Products />} /> {/*NAV Example*/}
                <Route path ="/checkout" element={<Checkout />} /> {/*NAV Example*/}
                <Route path ="/products/:productId" element={<ProductDetails />} /> {/*Params 2*/} 
             </Routes> {/*Step 6*/}
        
        </Router> //Step 5
    ); //Step 4
  } //Step 3
