import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import MealDetail from './components/MealDetail/MealDetail';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/categories' element={<Categories />} />
        <Route exact path='/random' element={<RandomMeal />} />
        <Route path="/:idMeal" element={<MealDetail />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
