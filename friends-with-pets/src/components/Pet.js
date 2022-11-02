import React from "react"

export default function Pet(pets) {
    return (
        <ul className="pet">
            <li className="pet--name">Pet name: {pets.name}</li>
            <p className="pet--breed">Pet breed: {pets.breed}</p>
        </ul>
    )
}

