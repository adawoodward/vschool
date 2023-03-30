import React, { useEffect, useContext } from 'react'
import { Context } from '../Context'
import './RandomMeal.css'

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
          <div className='random--instructions'>
            <h4>Instructions</h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))}        
    </div>
  )
}

export default RandomMeal