import axios from 'axios'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Context } from "../Context"
import '../CategoriesDetail/CategoriesDetail.css'
// import '../MealDetail/MealDetail.css'

function CategoriesDetail() {
    const { strCategory } = useParams()

    const [ singleCategory, setSingleCategory ] = useState([])

    const fetchSingleCategory = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
            .then(res => res.json())
            .then(data => setSingleCategory(data))
    }

    useEffect(()=> {
        fetchSingleCategory()
    }, [])

    console.log(singleCategory.meals)

    return (
        <div className='singleCategories'>
            <p>{strCategory}</p>
            {singleCategory.meals?.map((category)=>{
                return (
                    <div key={category.idMeal}>
                        <h4>{category.strMeal}</h4>
                        <Link to={`/${category.idMeal}`}>
                        <img src={category.strMealThumb} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )

}

export default CategoriesDetail