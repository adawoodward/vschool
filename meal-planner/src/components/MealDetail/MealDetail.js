import axios from 'axios'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Context } from "../Context"

function MealDetail() {
    const { idMeal } = useParams()
    // const { fetchSingleMeal, singleMeal } = useContext(Context)

    const [ singleMeal, setSingleMeal] = useState({single: {}})

    const fetchDetails = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setSingleMeal(data))
    }

    useEffect(()=> {
        fetchDetails()
    }, [])

    // useEffect(()=> {
    //     fetchSingleMeal()
    // }, [fetchSingleMeal])
    
    console.log(singleMeal.meals)
    let item = singleMeal.meals

    return (
        <div>
            <p>{idMeal}</p>
            {singleMeal.meals?.map((item) => {
                // const {idMeal, strArea, strCategory, strMeal, strMealThumb, strYoutube} = item
                return (
                    <div>
                        <h4>{item.strMeal}</h4>
                        <img src={item.strMealThumb} />
                        <p>{item.strArea}</p>
                        <p>{item.strInstructions}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MealDetail
