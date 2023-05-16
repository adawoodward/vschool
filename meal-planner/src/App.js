import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import MealDetail from './components/MealDetail/MealDetail';
import CategoriesDetail from './components/CategoriesDetail/CategoriesDetail';
import ThreeMeals from './components/ThreeMeals/ThreeMeals';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import SavedMeals from './components/SavedMeals/SavedMeals';
import './styling/style.css'
// import SavedMeal from './components/SavedMeals/SavedMeals';


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
        <Route path='/categories/:strCategory' element={<CategoriesDetail/>} />
        <Route path='/randomThree' element={<ThreeMeals />} />
        <Route path='/savedMeals' element={<SavedMeals />} />

      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
