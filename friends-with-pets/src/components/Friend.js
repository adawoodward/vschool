import React from "react"
import Pet from "./Pet"
// import FriendList from "./FriendList"
import data from "../data"

// export default function Friend(item) {
    // const petList = data.map(item => {
    //     item.pets.map((pets, index) => {
    //         return (
    //             <Pet
    //             // key={item.pets}
    //             key={index}
    //             item={item}
    //             />
    //         )
    //     })
    // })

    // const petList = data.map((item) => {
    //     return item.pets.map((item) => {
    //         return (
    //             <li>
    //                 {item.name} {item.breed}
    //             </li>
    //         )
    //     })
    // })
    // let friendList;
    // console.log(friendList);

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


