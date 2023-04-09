import React, { useEffect, useState, useContext} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Context } from '../Context' 
import axios from 'axios'

function SavedMeals() {
    const { idMeal } = useParams()

    const [items, setItems] = useState([])

    const { singleMeal } = useContext(Context)


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('savedMeals'))
        console.log(items)
        if (items) {
            setItems(items)
        }
        console.log(items)
    }, [])

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
    //     const items = JSON.parse(localStorage.getItem('savedMeals'))
    //     const removeItem = items.filter((item) => {
    //         return item.idMeal !== idMeal
    //     })
    //     setItems(removeItem)
    //     console.log('new list:', removeItem)
    // }

    function handleRemove

    // function deleteItem(id) {
    //     console.log(list)
    //     axios.delete(`https://api.vschool.io/ada/thing/${id}`)
    //         .then(()=> setList(prevList => {
    //             return prevList.filter(item => item._id !== id)
    //         }))
    // }

    return (
        <div>
            <h3>Saved Meals</h3>
            {items.idMeal}
            {items.length <= 0 && <div style={{height: '71vh'}}>You have no saved meals.</div>}
            {items && items.map((item, index) => {
                return (
                    // <div key={items[index]}>
                    <div key={item[0].idMeal}>
                        <h3>{item[0].strMeal}</h3>
                        <Link to={`/${item[0].idMeal}`}>
                        <img src={item[0].strMealThumb} />
                        </Link>
                        <button onClick={handleRemove}>Remove</button>
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