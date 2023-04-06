import axios from 'axios'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Context } from "../Context"
import RandomMeal from '../RandomMeal/RandomMeal'

const ThreeMeals = () => {
    // const [ threeMeals, setThreeMeals ] = useState([])

    // const { fetchRandomMeal, randomMeal } = useContext(Context)

    // useEffect(()=> {
    //     fetchRandomMeal()
    // }, [fetchRandomMeal])

    const [randomBreakfast, setRandomBreakfast] = useState({})
    const [randomLunch, setRandomLunch] = useState({})
    const [randomDinner, setRandomDinner] = useState({})
    const [allBreakfast, setAllBreakfast] = useState([])
    const [allLunch, setAllLunch] = useState([])

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

        setRandomBreakfast(randomBreakfastImage, randomBreakfastTitle)
        // console.log(randomBreakfastId)
        console.log(randomBreakfast)
        // return (<h4>{randomBreakfast.idMeal}</h4>)
        // return (<img src={randomBreakfast.randomBreakfastIdMeal}/>)
    }

    useEffect(()=> {
        async function getPlans() {
            fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta").then((res) => res.json())
            fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian").then((res) => res.json())

            // const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta")
            // https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian
            // const data = await res.json()
            // setAllLunch(meals)
        }
        getPlans()
    }, [])

    function fetchRandomLunch() {
        const randomNum = Math.floor(Math.random() * allLunch.length)
        // const randomBreakfastId = allBreakfast[randomNum].idMeal
        const randomLunchImage = allLunch[randomNum].strMealThumb
        setRandomLunch(randomLunchImage)
        // console.log(randomBreakfastId)
        console.log(randomLunch)
        // return (<h4>{randomBreakfast.idMeal}</h4>)
        // return (<img src={randomBreakfast.randomBreakfastIdMeal}/>)
    }

    return (
        <>
        <div className='three--meals'>
            <button onClick={fetchRandomBreakfast}>Get Breakfast</button>
            {/* <h2>{randomBreakfast.strMeal}</h2> */}
            {/* <RandomMeal /> */}
            <img src={randomBreakfast} />
        </div>
        <div className='three--meals'>
            <button onClick={fetchRandomLunch}>Get Lunch</button>
            <img src={randomLunch} />
        </div>
        </>
    )

}

export default ThreeMeals