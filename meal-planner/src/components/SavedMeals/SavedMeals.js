import React, { useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Context } from '../Context' 
import axios from 'axios'

function SavedMeals() {
    const { idMeal } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('savedMeals'))
        console.log(items)
        if (items) {
            setItems(items)
        }
        console.log(items)
    }, [])

    return (
        <div>
            <h3>Saved Meals</h3>
            {items.idMeal}
            {items.length <= 0 && <p>You have no saved meals.</p>}
            {items && items.map((item, index) => {
                return (
                    <div key={items[index]}>
                        <h3>{item[0].strMeal}</h3>
                        {/* <a href={`/${item[0].idMeal}`} /> */}
                        <Link to={`/${item[0].idMeal}`}>
                        <img src={item[0].strMealThumb} />
                        </Link>
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