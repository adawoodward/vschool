import axios from 'axios'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Context } from "../Context"
// import './ThreeMeals.css'

const ThreeMeals = () => {
    const { idMeal } = useParams()

    const [singleMeal, setSingleMeal] = useState({single: {}})

    const fetchDetails = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setSingleMeal(data))
    }

    useEffect(()=> {
        fetchDetails()
    }, [])

    console.log(singleMeal.meals)
    console.log(singleMeal)

    const [randomBreakfast, setRandomBreakfast] = useState({
        strMeal: 'Salmon Eggs Eggs Benedict',
        idMeal: '52962',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1550440197.jpg'
    })
    const [randomLunch, setRandomLunch] = useState({
        strMeal: 'Lasagna Sandwiches',
        idMeal: '52987',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg'
    })
    const [randomDinner, setRandomDinner] = useState({
        strMeal: 'Beef Bourguignon',
        idMeal: '52904',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg'
    })
    const [allBreakfast, setAllBreakfast] = useState([])
    const [allLunch, setAllLunch] = useState([])
    const [allDinner, setAllDinner] = useState([])

    useEffect(()=> {
        async function getPlans() {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
            const data = await res.json()
            setAllBreakfast(data.meals)
        }
        getPlans()
    }, [])

    function fetchRandomBreakfast() {
        const randomNum = Math.floor(Math.random() * allBreakfast.length)
        const randomBreakfastImage = allBreakfast[randomNum].strMealThumb
        const randomBreakfastTitle = allBreakfast[randomNum].strMeal
        const randomBreakfastId = allBreakfast[randomNum].idMeal
        setRandomBreakfast({
            strMealThumb: randomBreakfastImage,
            strMeal: randomBreakfastTitle,
            idMeal: randomBreakfastId
        })

        console.log(randomBreakfast)
    }

    useEffect(() => {
        async function getData() {
            const url1 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta'
            const url2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian'
            const url3 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Side'
            const responses = await Promise.all([fetch(url1), fetch(url2), fetch(url3)])
            const data1 = await responses[0].json()
            const meal1 = data1.meals
            console.log(meal1)
            const data2 = await responses[1].json()
            const meal2 = data2.meals
            console.log(meal2)
            const data3 = await responses[2].json()
            const meal3 = data3.meals
            console.log(meal3)
            const data = meal1.concat(meal2, meal3)
            // const data = Array.isArray(data1) ? data1.concat(data2) : []
            console.log(data)
            setAllLunch(data)
        }
        getData()
    }, [])

    function fetchRandomLunch() {
        const randomNum = Math.floor(Math.random() * allLunch.length)
        const randomLunchId = allLunch[randomNum].idMeal
        const randomLunchImage = allLunch[randomNum].strMealThumb
        const randomLunchTitle = allLunch[randomNum].strMeal
        setRandomLunch({            
            strMealThumb: randomLunchImage,
            strMeal: randomLunchTitle,
            idMeal: randomLunchId
        })
        console.log(randomLunch)
    }


    useEffect(() => {
        async function getData() {
            const url1 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
            const url2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'
            const url3 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb'
            const url4 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

            const responses = await Promise.all([fetch(url1), fetch(url2), fetch(url3), fetch(url4)])
            const data1 = await responses[0].json()
            const meal1 = data1.meals
            console.log(meal1)
            const data2 = await responses[1].json()
            const meal2 = data2.meals
            console.log(meal2)
            const data3 = await responses[2].json()
            const meal3 = data3.meals
            console.log(meal3)
            const data4 = await responses[3].json()
            const meal4 = data4.meals
            console.log(meal4)
            const data = meal1.concat(meal2, meal3, meal4)
            // const data = Array.isArray(data1) ? data1.concat(data2) : []
            console.log(data)
            setAllDinner(data)
            console.log(allDinner)
        }
        getData()
    }, [])

    function fetchRandomDinner() {
        const randomNum = Math.floor(Math.random() * allDinner.length)
        const randomDinnerImage = allDinner[randomNum].strMealThumb
        const randomDinnerTitle = allDinner[randomNum].strMeal
        const randomDinnerId = allDinner[randomNum].idMeal
        setRandomDinner({
            strMeal: randomDinnerTitle,
            strMealThumb: randomDinnerImage,
            idMeal: randomDinnerId
        })
        console.log(randomDinner)
    }

    return (
        <div className='oneDay'>
        <div className='three--meals'>
            <div>
                <h2>Breakfast</h2>
            <img src={randomBreakfast.strMealThumb} onClick={fetchRandomBreakfast}/>
            <div className='title'>{randomBreakfast.strMeal.length < 20 ? `${randomBreakfast.strMeal}` : `${randomBreakfast.strMeal.substring(0, 20)}...`}</div>
            {/* <h5>{item.strMeal.length < 20 ? `${item.strMeal}` : `${item.strMeal.substring(0, 20)}...`}</h5> */}

            <Link to={`/${randomBreakfast.idMeal}`}>
            <button className='more'>More</button>
            </Link>
            </div>
        </div>
        <div className='three--meals'>
            <div>
                <h2>Lunch</h2>
            <img src={randomLunch.strMealThumb} onClick={fetchRandomLunch}/>
            <div className='title'>{randomLunch.strMeal.length < 20 ? `${randomLunch.strMeal}` : `${randomLunch.strMeal.substring(0, 20)}...`}</div>
            <Link to={`/${randomLunch.idMeal}`}>
            <button className='more'>More</button>
            </Link>
            </div>
        </div>
        <div className='three--meals'>
            <div>
                <h2>Dinner</h2>
            <img src={randomDinner.strMealThumb} onClick={fetchRandomDinner}/>
            <div className='title'>{randomDinner.strMeal.length < 20 ? `${randomDinner.strMeal}` : `${randomDinner.strMeal.substring(0, 20)}...`}</div>
            <Link to={`/${randomDinner.idMeal}`}>
            <button className='more'>More</button>
            </Link>
            </div>
        </div>
        </div>
    )

}

export default ThreeMeals