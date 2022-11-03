import React from "react"

export default function Pet(item) {
    return (
        <ul className="pet">
            <li className="pet--name">Pet name: {item.name}</li>
                <p className="pet--breed"> - Pet breed: {item.breed}</p>
        </ul>
    )
}

