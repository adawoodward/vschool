import React, { useState, useEffect, useCallback, useContext } from 'react'
// import './Home.css'
import { Context } from '../Context'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Home = (props) => {

  const [search, setSearch] = useState("")
  console.log(search)

  const { fetchMeals, meals } = useContext(Context)

  const handleFetchMeals = useCallback(()=>{
    fetchMeals(search)
  }, [search, fetchMeals])

  // let idMeal
  // const handleFetchSingleMeal = useCallback(() => {
  //   fetchSingleMeal(idMeal)
  // }, [fetchSingleMeal])

  return (
    <div className='home'>
      <img src={logo} className='logo'/>
      <div className='home--search' >
        <input 
          type='text' 
          name='mealName'
          placeholder='Type a meal name...' 
          value={search} 
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button onClick={handleFetchMeals}>Search Meal</button>
        <br></br>
        {/* <img src={('/assets/logo.png')} /> */}
        <br></br>
      </div>
      <div className='home--grid'>
        {meals ? (
          meals.map((meal)=> {
            const {idMeal, strArea, strCategory, strMeal, strMealThumb, strYoutube} = meal
            return (
            <div className='home--meal' key={meal.idMeal}>             
              <img src={meal.strMealThumb} />
              <br></br>    
              <Link to={`/${meal.idMeal}`}>
                <button>Click</button>
              </Link>            
              {/* <h4>{meal.strMeal}</h4> */}
              <h4>{meal.strMeal.length < 15 ? `${meal.strMeal}` : `${meal.strMeal.substring(0, 15)}...`}</h4>
              <p>{meal.strArea}</p>
              <p>{meal.strCategory}</p>
              {/* <p>{meal.strInstructions}</p> */}
              {/* <p>{meal.strYoutube}</p> */}
              {/* <iframe width="420" height="315" src={meal.strYoutube.replace('watch?v=', 'embed/')}></iframe> */}
            </div>
            )
          })
        ) : (<h3>No meals found! Try another keyword...</h3>)}
      </div>
     
    </div>
  )
}

export default Home