import axios from 'axios'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Context } from "../Context"

function MealDetail() {
    const [isSaved, setIsSaved] = useState(false)

    const { idMeal } = useParams()
    // const { fetchSingleMeal, singleMeal } = useContext(Context)

    const [singleMeal, setSingleMeal] = useState({single: {}})

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
    console.log(singleMeal)


    // let item = singleMeal.meals

    const handleSaveButtonClick = () => {
        if (localStorage.getItem('savedMeals') === null) {
            localStorage.setItem('savedMeals', JSON.stringify([singleMeal.meals]))
            alert('Meal Saved Successfully')
            setIsSaved(true)
        } else {
            const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
            if (!isSaved) {
                // savedMeals.push(singleMeal.meals)
                savedMeals.push(singleMeal.meals)
                localStorage.setItem('savedMeals', JSON.stringify(savedMeals))

                // localStorage.setItem('savedMeals', JSON.stringify(savedMeals.idMeal))
                // localStorage.setItem('savedMeals', JSON.stringify([singleMeal.meals.idMeal]))
                alert('Meal Saved Successfully')
                setIsSaved(true)
                console.log(savedMeals)
            } else {
                savedMeals.splice(savedMeals.indexOf(singleMeal.meals.idMeal), 1)
                localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
                setIsSaved(false)
                alert('Meal Removed Successfully')
                console.log(savedMeals)
            }
        }
    }

    useEffect(()=> {
        if (localStorage.getItem('savedMeals')){
            const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
            if (savedMeals.toString().includes(idMeal)) {
                setIsSaved(true)
            } else {
                setIsSaved(false)
            }
        }
    }, [idMeal])

    return (
        <div>
            <p>{idMeal}</p>
            {singleMeal.meals?.map((item) => {
                // const {idMeal, strArea, strCategory, strMeal, strMealThumb, strYoutube} = item
                return (
                    <div key={item.idMeal}>
                        <h4>{item.strMeal}</h4>
                        {isSaved && (
                            <p>You already saved the meal.</p>
                        )}
                        <button onClick={handleSaveButtonClick}>
                            {isSaved ? (
                                <div>
                                    Remove
                                </div>
                            ):(
                                <div>
                                    Save
                                </div>
                            )}
                        </button>
                        <img src={item.strMealThumb} />
                        <p>{item.strArea}</p>
                        <p>{item.strInstructions}</p>
                        <iframe width="420" height="315" src={item.strYoutube.replace('watch?v=', 'embed/')}></iframe>

                    </div>
                )
            })}
        </div>
    )
}

export default MealDetail