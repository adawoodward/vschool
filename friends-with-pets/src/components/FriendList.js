import React from "react"
import data from "../data"
// import Friend from "./Friend"
// import Pet from "./Pet"

export default function FriendList(props) {
    const friendList = data.map((item, index) => {
        return (
            <div key={index}>
            <ul className="friend">
                <li>Name: {item.name}</li>
                <p> - Age: {item.age}</p>
                <p> - Pets:</p>
                
                {item.pets.map((pet, index) => {
                    return (                
                        <div key={index}>
                            <ul>
                                <li>Name: {pet.name} | Breed: {pet.breed}</li>
                            </ul>
                        </div>
                    );
                })}
            </ul>
        </div>
        ) 
    })

    return (
        <section className="friendList">
                <h2>Friends list</h2>
                <div className="card">{friendList}</div>
        </section>
    )
}

