import React from "react"

function Callout(props) {
    return (
        <div className="callout">
            {props.children}
        </div>
    )
}

export default Callout