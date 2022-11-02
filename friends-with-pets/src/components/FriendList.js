import React from "react"
import data from "../data"
import Friend from "./Friend"
import Pet from "./Pet"

export default function FriendList() {
    const friendList = data.map(item => {
        return (
            <ul className="friend">
                <li>Name: {item.name}</li>
                <p>Age: {item.age}</p>
                <Pet 
                    key={item.pets.id}
                    item={item.pets} 
                    name={item.pets.name} 
                    breed={item.pets.breed}
                />
            </ul>
        )
    })

    return (
        <section className="friendList">
            <h2>Friends list</h2>
                <div>
                    {friendList}
                </div>
        </section>
    )
}

