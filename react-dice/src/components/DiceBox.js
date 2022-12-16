import React from "react"

export default function DiceBox() {
    console.log("DiceBox component rendered")

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    return (
       <div className="randomNumber">
            <p>{randomNumber}</p>
       </div>
    )
}