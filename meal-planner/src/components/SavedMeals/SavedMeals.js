import React, { useEffect, useState, useContext} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Context } from '../Context' 
import axios from 'axios'
import MealDetail from '../MealDetail/MealDetail'
// import './SavedMeals.css'

function SavedMeal() {
    const { idMeal } = useParams()

    const [items, setItems] = useState([])

    const [isSaved, setIsSaved] = useState(false)

    // const { singleMeal } = useContext(Context)

    const [singleMeal, setSingleMeal] = useState({single: {}})


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('savedMeals'))
        console.log(items)
        if (items) {
            setItems(items)
        }
        console.log(items)
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


    
    // function handleRemoveClick() {
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     const filtered = savedMeals.filter((item) => item.idMeal !== idMeal)
    //     localStorage.setItem('savedMeals', JSON.stringify(filtered))
    //     setIsSaved(false)
    //     alert('Meal deleted!')
    //     window.location.reload()
    //     console.log(savedMeals)
    // }

    // function handleRemoveClick() {
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     let index = savedMeals.findIndex(element => element.idMeal === idMeal)
    //     console.log(index)
    //     console.log(savedMeals.length)
    //     // savedMeals.splice(index, 1)
    //     savedMeals.splice(savedMeals.indexOf(savedMeals?.idMeal), 1)
    //     localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
    //     // localStorage.setItem('savedMeals', JSON.stringify(savedMeals.filter(item => item.idMeal !== idMeal)))
    //     setIsSaved(false)
    //     alert('Meal deleted!')
    //     window.location.reload()
    //     console.log(savedMeals)
    // }

    function handleRemoveClick(idMeal) {
        const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
        const removeItem = savedMeals.filter((item) => {
            return item.idMeal !== idMeal
        })
        // savedMeals.splice(savedMeals.indexOf(savedMeals?.idMeal), 1)
        localStorage.setItem('savedMeals', JSON.stringify(removeItem))
        // localStorage.setItem('savedMeals', JSON.stringify(savedMeals.filter(item => item.idMeal !== idMeal)))
        setIsSaved(false)
        alert('Meal deleted!')
        window.location.reload()
        console.log(savedMeals)
    }

    // keep deleting the first one
    // const handleRemoveClick = (idMeal) => {
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     let index = savedMeals.findIndex(element => element.idMeal === idMeal)
    //     console.log(savedMeals)
    //     console.log(items)
    //     console.log(index)
    //     // savedMeals.splice(index, 1)
    //     // savedMeals.splice(savedMeals.valueOf({idMeal}), 1)
    //     savedMeals.splice(savedMeals.indexOf(savedMeals?.idMeal), 1)
    //     localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
    //     setIsSaved(false)
    //     alert('Meal deleted!')
    //     window.location.reload()
    //     console.log(savedMeals)
    // }

    // const handleRemoveClick = () => {
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     // const idExists = savedMeals.some(obj => obj.idMeal === singleMeal.meals.idMeal)
    //     let i
    //     savedMeals.splice(savedMeals.indexOf(savedMeals[i]?.[0].idMeal), 1)
    //     localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
    //     setIsSaved(false)
    //     alert('Meal Removed Successfully')
    //     console.log(savedMeals)
    //     window.location.reload()
    // }

    // const handleRemoveClick = () => {
    //     const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
    //     const filtered = savedMeals.filter((item) => {
    //         return item.idMeal !== idMeal
    //     })
    //     console.log(filtered)
    //     localStorage.setItem('savedMeals', JSON.stringify(filtered))

    //     setIsSaved(false)
    //     alert('Meal Removed Successfully!')
    //     console.log(savedMeals)
    //     window.location.reload()
    // }

    // console.log(items)


        
    return (
        <div className='savedMeals'>
            {/* <h3>Saved Meals</h3> */}
            {items.idMeal}
            {items.length <= 0 && <div style={{height: '71vh'}}>You have no saved meals.</div>}
            {items && items.map((item) => {
                console.log(items)
                return (
                    // <div key={items[index]}>
                    <div key={item.idMeal} className='card'>
                        {/* <h5>{item.idMeal}</h5> */}
                        {/* <h5>{item.strMeal}</h5> */}
                        <h5>{item.strMeal.length < 20 ? `${item.strMeal}` : `${item.strMeal.substring(0, 20)}...`}</h5>
                        {/* <h5>{item[0].strMeal.length < 20 ? `${item[0].strMeal}` : `${item[0].strMeal.substring(0, 20)}...`}</h5> */}
                        <br></br>
                        <Link to={`/${item.idMeal}`}>
                        <img src={item.strMealThumb} />
                        </Link>
                        <br></br>
                        <p>Category: {item.strArea}, {item.strCategory}</p>
                        {/* <button onClick={handleRemove}>Remove</button> */}
                        {/* <button onClick={handleRemove}>Remove</button> */}
                        {/* <button onClick={() => handleRemoveClick}>Remove</button> */}
                        {/* <button onClick={handleRemoveClick}>Remove</button> */}
                        {/* <button onClick={handleRemoveClick}>Delete</button> */}
                        <button onClick={()=>handleRemoveClick(item.idMeal)}>Delete</button>

                        {/* // <Link href={`/savedMeals/${item[0].idMeal}`} key={item[0].idMeal}>More
                        // </Link> */}

                    </div>
                )
            })}

</div>
    )
}

export default SavedMeal