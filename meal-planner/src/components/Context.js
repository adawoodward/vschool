import React, { createContext, useEffect, useCallback, useState } from 'react'
import axios from 'axios'

export const Context = createContext()

// function ContextProvider(props) {
export const ContextProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [categories, setCategories] = useState([])
    const [randomMeal, setRandomMeal] = useState([])
    const [singleMeal, setSingleMeal] = useState([])


    // useEffect(()=> {
    //     getData()
    // }, [])
    // function getData(search) {
    //     axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${search}
    //     `)
    //     .then((response)=>{
    //         console.log(response.data)
    //     })
    // }
    // const myFunction = useCallback(() => {
    //     // execute your logic for myFunction
    //   }, [state]);

    const fetchMeals = useCallback((search) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(response => {
                console.log(response.data.meals)
                setMeals(response.data.meals)
            })
    }, [])

    // const fetchDetails = useCallback((idMeal) => {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    //         .then(res => res.json())
    //         .then(data => setSingleMeal(data))
    // }, [])

    // const fetchDetails = useCallback((idMeal) => {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    //         .then(response=>{
    //             console.log(response.data)
    //             response.json()})
    //         .then(data => setSingleMeal(data))
    // }, [])
    
    // const fetchSingleMeal = useCallback((idMeal) => {
    //     axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    //         .then(response=>{
    //             console.log(typeof response.data.meals)
    //             console.log(response.data.meals)
    //             setSingleMeal(response.data.meals)
    //             // setMeals(response.data.meals)
    //             console.log(singleMeal)
    //         })
    // }, [])

    const fetchCategories = useCallback(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response=>{
                console.log(response.data.categories)
                setCategories(response.data.categories)
            })
    }, [])

    const fetchRandomMeal = useCallback(()=>{
        axios.get(`https:/www.themealdb.com/api/json/v1/1/random.php`)
            .then(response=>{
                console.log(response.data.meals)
                setRandomMeal(response.data.meals)
            })
    }, [])

    return (
        <Context.Provider value={{ fetchMeals, meals, fetchCategories, categories, fetchRandomMeal, randomMeal }}>
            {children}
        </Context.Provider>
    )
}

// export {ContextProvider}