import React from "react"

export default function Box(props) {
    console.log("Box component rendered")

    return (
        // <div className="box-container">
            <div className="box" style={{backgroundColor: props.color}} />
        // </div>
    );
}
