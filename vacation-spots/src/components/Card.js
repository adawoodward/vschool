import React from "react"
// import data from "../data"

export default function Card(props) {
    return (
        <div className="card">
            <p>{props.item.place}</p>
            <p>{props.item.price}</p>
            <p>{props.item.timeToGo}</p>
        </div>
    )
}