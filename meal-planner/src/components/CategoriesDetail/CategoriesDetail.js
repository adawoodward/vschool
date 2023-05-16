import axios from 'axios'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Context } from "../Context"
// import '../CategoriesDetail/CategoriesDetail.css'
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
        <div className='singleCategory'>
            {/* <h3>{strCategory}</h3> */}
            <br></br>
            {singleCategory.meals?.map((category)=>{
                return (
                    <div key={category.idMeal} className='category'>
                        {/* <h4>{category.strMeal}</h4> */}
                        <h5>{category.strMeal.length < 20 ? `${category.strMeal}` : `${category.strMeal.substring(0, 18)}...`}</h5>

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