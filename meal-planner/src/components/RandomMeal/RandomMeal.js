import React, { useEffect, useContext } from 'react'
import { Context } from '../Context'
// import './RandomMeal.css'

const RandomMeal = () => {
  const { fetchRandomMeal, randomMeal } = useContext(Context)

  useEffect(()=> {
    fetchRandomMeal()
  }, [fetchRandomMeal])

  return (
    <div className='random'>
      {randomMeal.map(meal=>(
        <div className='random--grid' key={meal.idMeal}>
          <div className='random--control'>
            <img src={meal.strMealThumb} alt="#" />
            <button onClick={fetchRandomMeal}>Generate Another Meal</button>
          </div>
          <h4>Ingredients</h4>
          <div className='ingredients'>{meal.strIngredient1}, {meal.strIngredient2}, {meal.strIngredient3}, {meal.strIngredient4}, {meal.strIngredient5}, {meal.strIngredient6}, {meal.strIngredient7}, {meal.strIngredient8}, {meal.strIngredient9}</div>
          <br></br>
          <div className='random--instructions'>
            <h4 style={{textAlign: 'center'}}>Instructions</h4>
            <p>{meal.strInstructions}</p>
          </div>
          <iframe width="420" height="315" src={meal.strYoutube.replace('watch?v=', 'embed/')}></iframe>
        {/* <div className='random--three'>
          <img src={meal.strMealThumb} alt="#" />
          <button onClick={fetchRandomMeal}>Generate Another Meal</button>
        </div> */}
      </div>
      ))}        
    </div>
  )
}

export default RandomMeal