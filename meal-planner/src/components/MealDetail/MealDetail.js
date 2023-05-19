import axios from 'axios'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Context } from "../Context"
// import './MealDetail.css'

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

    // const { fetchDetails } = useContext(Context)

    // const handleFetchDetails = useCallback(()=>{
    //   fetchDetais(idMeal)
    // }, [idMeal, fetchDetais])

    // useEffect(()=>{ // when the component is mounted, we will run the function fetchCategories
    //     fetchDetails()
    //   }, [fetchDetails]) // fetchCategories function as dependency
    

    // useEffect(()=> {
    //     fetchSingleMeal()
    // }, [fetchSingleMeal])
    
    console.log(singleMeal.meals)
    console.log(singleMeal)

    // let item = singleMeal.meals
 
    const handleSaveButtonClick = () => {
        if (localStorage.getItem('savedMeals') === null) {
            // localStorage.setItem('savedMeals', JSON.stringify([singleMeal.meals]))
            // localStorage.setItem('savedMeals', JSON.stringify([singleMeal.meals[0].idMeal]))
            localStorage.setItem('savedMeals', JSON.stringify([singleMeal.meals[0]]))

            alert('Meal Saved Successfully')
            setIsSaved(true)
        } else {
            const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
            // const idExists = savedMeals.some(obj => obj.idMeal === singleMeal.meals.idMeal)
            if (!isSaved && savedMeals.some(item => item.idMeal !== singleMeal.meals.idMeal)) {
                // savedMeals.push(singleMeal.meals)
                // savedMeals.push(singleMeal.meals[0].idMeal)
                savedMeals.push(singleMeal.meals[0])

                // savedMeals.splice(savedMeals.indexOf(savedMeals[i]?.[0].idMeal), 1)
                // savedMeals.push(singleMeal.meals.idMeal)

                localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
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


    // function handleRemoveClick(idMeal) {
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     const removeItem = savedMeals.filter((item) => {
    //         return item.idMeal !== idMeal
    //     })
    //     // savedMeals.splice(savedMeals.indexOf(savedMeals?.idMeal), 1)
    //     localStorage.setItem('savedMeals', JSON.stringify(removeItem))
    //     // localStorage.setItem('savedMeals', JSON.stringify(savedMeals.filter(item => item.idMeal !== idMeal)))
    //     setIsSaved(false)
    //     alert('Meal deleted!')
    //     window.location.reload()
    //     console.log(savedMeals)
    // }

    return (
        <div className='recipe--container'>
            {/* <p>{idMeal}</p> */}
            {singleMeal.meals?.map((item) => {
                // const {idMeal, strArea, strCategory, strMeal, strMealThumb, strYoutube} = item
                return (
                    <div key={item.idMeal} className='recipe'>
                        <h4>{item.strMeal}</h4>
                        {isSaved && (
                            <p>You already saved the meal.</p>
                        )}
                        <img src={item.strMealThumb} />
                        <br></br>

                        <button onClick={handleSaveButtonClick} className='switchingButton'>
                            {isSaved && item.idMeal === singleMeal.meals.idMeal ? (
                                <div>
                                    Remove
                                </div>
                            ):(
                                <div>
                                    Save
                                </div>
                            )}
                        </button>
                        <h4>Ingredients</h4>
                        <p>{item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3}, {item.strIngredient4}, {item.strIngredient5}, {item.strIngredient6}, {item.strIngredient7}, {item.strIngredient8}, {item.strIngredient9}</p>
                        <h4>Category</h4>
                        <p>{item.strArea}</p>
                        <h4>Instructions</h4>
                        <div className='instructions'>{item.strInstructions}</div>
                        {/* <iframe width="420" height="315" src={item.strYoutube?.replace('watch?v=', 'embed/')}></iframe> */}
                        <div>
                            {item.strYoutube ? <iframe width="420" height="315" src={item.strYoutube.replace('watch?v=', 'embed/')} /> : <div style={{marginBottom: "30px"}}></div>}
                        </div>
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
}

export default MealDetail