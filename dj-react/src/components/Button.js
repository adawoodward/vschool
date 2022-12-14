import React from "react"

export default function Button(props) {
    console.log("Button component rendered")

    return (
        <button onClick={props.handleClick} className="button">{props.buttonName}</button>
    )
}