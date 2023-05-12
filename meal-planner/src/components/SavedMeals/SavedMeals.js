import React, { useEffect, useState, useContext} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Context } from '../Context' 
import axios from 'axios'
import MealDetail from '../MealDetail/MealDetail'
import './SavedMeals.css'

function SavedMeals() {
    const { idMeal } = useParams()

    const [items, setItems] = useState([])

    const [isSaved, setIsSaved] = useState(false)


    // const { singleMeal } = useContext(Context)

    const [singleMeal, setSingleMeal] = useState({single: {}})

    // const fetchDetails = () => {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    //         .then(res => res.json())
    //         .then(data => setSingleMeal(data))
    // }

    // useEffect(()=> {
    //     fetchDetails()
    // }, [])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('savedMeals'))
        console.log(items)
        if (items) {
            setItems(items)
        }
        console.log(items)
        // console.log(items[0]?.[0].idMeal)
    }, [])

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
    
    // console.log(items[0]?.[0].idMeal)
    // console.log(items[1]?.[0].idMeal)
    // console.log(items[2]?.[0].idMeal)

    // const handleRemove = () => {
    //     // localStorage.removeItem('savedMeals')
    //     const savedMealsId = JSON.parse(localStorage.getItem('savedMeals'.idMeal))
    //     // savedMeals.splice(savedMeals.indexOf(singleMeal.meals.idMeal), 1)
    //     savedMealsId.filter(item => item.idMeal !== savedMealsId)
    //     localStorage.setItem('savedMeals', JSON.stringify(savedMealsId))

    //     // savedMeals.splice(savedMeals.indexOf(singleMeal.meals.idMeal), 1)
    //     // localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
    // }

    // function removeImage(id) {
    //     const removeItem = generatedMemes.filter((meme) => {
    //         return meme.id !== id;
    //     })
    //     setGeneratedMemes(removeItem)
    //     console.log('new array:', removeItem)
    // }

    // function handleRemove(idMeal) {
    //     // const items = JSON.parse(localStorage.getItem('savedMeals'))
    //     const removeItem = items.filter((item) => {
    //         return item.idMeal !== idMeal
    //     })
    //     setItems(removeItem)
    //     console.log('new list:', removeItem)
    // }

    // const handleRemove = () => {
    //     // const deleteIndex = 1
    //     const retrieved = localStorage.getItem('savedMeals')
    //     const items = JSON.parse(retrieved)
    //     const filtered = items.filter(item => item.idMeal !== idMeal)
    //     localStorage.setItem('savedMeals', JSON.stringify(filtered))
    //     // itmes.map((item, index) => {
    //     //     if (item[0].idMeal === idMeal)
    //     // })
    // }


    // savedMeals.splice(savedMeals.indexOf(singleMeal.meals.idMeal), 1)
    // localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
    // setIsSaved(false)
    // alert('Meal Removed Successfully')
    // console.log(savedMeals)

    // const handleRemove = (idMeal) => {
    //     let i
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     // savedMeals.splice(savedMeals[0][indexOf(idMeal)].indexOf(idMeal), 1)
    //     savedMeals.splice(savedMeals.indexOf(idMeal), 1)

    //     // const filtered = savedMeals.filter(item => item.idMeal !== idMeal)

    //     localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
    //     // setIsSaved(false)
    // }

    // const handleRemove = (idMeal) => {
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     // savedMeals.splice(savedMeals[0].indexOf({idMeal}), 1)
    //     // const filtered = savedMeals.filter(item => item.idMeal !== idMeal)

    //     // items.splice(items.indexOf(idMeal), 1)
    //     console.log(items.indexOf(idMeal))
    //     console.log(items?.[1]?.indexOf(idMeal))
    //     console.log(savedMeals?.[0]?.[0])
    //     console.log(savedMeals?.[1]?.[0])

    //     let index = items?.findIndex(item => item.idMeal === idMeal)
    //     console.log(index)
    //     let realIndex = items[1]?.findIndex(card => card.idMeal === idMeal)
    //     console.log(realIndex) 

    //     setItems((current) => current.filter(item=> item.idMeal !== idMeal))

    //     localStorage.setItem('savedMeals', JSON.stringify(items))
    //     // setIsSaved(false)
    // }

    const handleRemove = (idMeal) => {
        const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
        savedMeals.splice(savedMeals[0].indexOf({idMeal}), 1)
        // const filtered = savedMeals.filter(item => item.idMeal !== idMeal)

        localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
        // setIsSaved(false)
    }


    const handleRemoveClick = () => {
        const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
        // const idExists = savedMeals.some(obj => obj.idMeal === singleMeal.meals.idMeal)
        let i
        savedMeals.splice(savedMeals.indexOf(savedMeals[i]?.[0].idMeal), 1)
        localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
        setIsSaved(false)
        alert('Meal Removed Successfully')
        console.log(savedMeals)
        window.location.reload()
    }
        
    

    // const handleRemove = (idMeal, index) => {
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     savedMeals[0].splice(savedMeals[0].valueOf({idMeal}), 1)

    //     // items[index]?.splice(items[index].indexOf({idMeal}), 1)
    //     // const filtered = savedMeals.filter(item => item.idMeal !== idMeal)

    //     localStorage.setItem('savedMeals', JSON.stringify(items))
    //     // setIsSaved(false)
    // }
    // console.log(items[0]?.[0].idMeal)
    // console.log(items[1]?.[0].idMeal)
    // console.log(items[2]?.[0].idMeal)

    return (
        <div className='savedMeals'>
            {/* <h3>Saved Meals</h3> */}
            
            {items.idMeal}
            {items.length <= 0 && <div style={{height: '71vh'}}>You have no saved meals.</div>}
            {items && items.map((item, index) => {
                return (
                    // <div key={items[index]}>
                    <div key={item[0].idMeal} className='card'>
                        {/* <h5>{item[0].strMeal}</h5> */}
                        <h5>{item[0].strMeal.length < 20 ? `${item[0].strMeal}` : `${item[0].strMeal.substring(0, 20)}...`}</h5>
                        <br></br>
                        <Link to={`/${item[0].idMeal}`}>
                        <img src={item[0].strMealThumb} />
                        </Link>
                        <br></br>
                        <p>{item[0].strArea}, {item[0].strCategory}</p>
                        {/* <button onClick={handleRemove}>Remove</button> */}
                        {/* <button onClick={handleRemove}>Remove</button> */}
                        <button onClick={handleRemoveClick}>Remove</button>

                        {/* // <Link href={`/savedMeals/${item[0].idMeal}`} key={item[0].idMeal}>More
                        // </Link> */}

                    </div>
                )
            })}
            {/* <div>
                {items[i].map((item, i) => {
                    return (
                        <div>{items[i].item.idMeal}</div>
                    )
                })}
            </div> */}
            {/* <div>{items}</div> */}
            {/* {items.length <=0 && <h5>You have no saved meals.</h5>}
            {items?.map((item, index) => {
                return (
                    <div key={index}>
                        {items?.item?.map((value, index) => {
                            return <span key={index}>{value}</span>
                        })}
                    </div>
                )
            })} */}
        </div>
    )
}

export default SavedMeals