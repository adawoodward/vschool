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
        console.log(randomBreakfastTitle)
        setRandomBreakfast(randomBreakfastImage)
        console.log(randomBreakfast)
        // return (<h4>{randomBreakfast.idMeal}</h4>)
        // return (<img src={randomBreakfast.randomBreakfastIdMeal}/>)
    }

    // useEffect(()=> {
    //     async function getPlans() {
    //         const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
    //         const data = await res.json()
    //         setAllBreakfast(data.meals)
    //     }
    //     getPlans()
    // }, [])

    // useEffect(()=> {
    //     Promise.all([
    //         fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta"),
    //         fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
    //     ])
    //     .then(res => res.json())
    //     .then(data=> setAllLunch(data.meals))
          
    //     // .then(res => res.json())
    //     // .then(data => setSingleMeal(data))
    //     // setAllLunch(meals)        
    // }, [])

    // useEffect(()=> {
    //     async function getPlans() {
    //         const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
    //         const data = await res.json()
    //         setAllBreakfast(data.meals)
    //     }
    //     getPlans()
    // }, [])

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

    // async function getData() {
    //     const url1 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta'
    //     const url2= '"https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian'
    //     const responses = await Promise.all([fetch(url1), fetch(url2)])
    //     const data1 = await responses[0].json()
    //     const data2 = await responses[1].json()
    // }

    function fetchRandomLunch() {
        const randomNum = Math.floor(Math.random() * allLunch.length)
        // const randomBreakfastId = allBreakfast[randomNum].idMeal
        const randomLunchImage = allLunch[randomNum].strMealThumb
        const randomLunchTitle = allLunch[randomNum].strMeal
        setRandomLunch(randomLunchImage)
        console.log(randomLunchTitle)
        // console.log(randomBreakfastId)
        console.log(randomLunch)
        // return (<h4>{randomBreakfast.idMeal}</h4>)
        // return (<img src={randomBreakfast.randomBreakfastIdMeal}/>)
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
        // const randomBreakfastId = allBreakfast[randomNum].idMeal
        const randomDinnerImage = allDinner[randomNum].strMealThumb
        const randomDinnerTitle = allDinner[randomNum].strMeal
        setRandomDinner(randomDinnerImage)
        console.log(randomDinnerTitle)
        console.log(randomDinner)
        // return (<h4>{randomBreakfast.idMeal}</h4>)
        // return (<img src={randomBreakfast.randomBreakfastIdMeal}/>)
    }


    return (
        <>
        <div className='three--meals'>
        <img src={randomBreakfast} />
            {/* {data?.map((item) => {
                return (
                    <div>{item.idMeal}</div>
                )
            })} */}
            <button onClick={fetchRandomBreakfast}>Get Breakfast</button>
            {/* <h2>{randomBreakfast.strMeal}</h2> */}
            {/* <RandomMeal /> */}
            {/* <img src={randomBreakfast} /> */}
        </div>
        <div className='three--meals'>
            <button onClick={fetchRandomLunch}>Get Lunch</button>
            <img src={randomLunch} />
        </div>
        <div className='three--meals'>
            <button onClick={fetchRandomDinner}>Get Dinner</button>
            <img src={randomDinner} />
        </div>
        </>
    )

}

export default ThreeMeals