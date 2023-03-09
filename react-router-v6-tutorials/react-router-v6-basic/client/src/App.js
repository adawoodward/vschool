import React from 'react' //Step 1
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Step 2
import Home from './components/Home.js' // Step 8
 
export default function App() { // Step 3
    return ( // Step 4

        <Router> {/*Step 5*/}
            <Routes> {/*Step 6*/}
                <Route path ="/" element={<Home />} /> {/*Step 7*/}
             </Routes> {/*Step 6*/}
        </Router> //Step 5
    ); //Step 4
  } //Step 3
