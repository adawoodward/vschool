import React from "react"
import Pet from "./Pet"
import data from "../data"

export default function Friend() {
    const petList = data.map((item) => {
        return (item.pets.map((item) => (
            <Pet
                key={item.id}
                item={item} 
                name={item.name} 
                breed={item.breed}
            />
        )))
    })

    // console.log(petList)

    return (
        <section className="petList">
            <h2>List of pets</h2>
            {petList}
        </section>
    )
}