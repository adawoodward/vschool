import React, {useContext} from "react"
import {Context} from '../Context'
import Edit from "./Edit"
import axios from "axios"


function List() {
    const {list, deleteItem, handleEdit, flexDirection} = useContext(Context)

    const element = list.map(item =>
        <Edit
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            key={item._id}
            id={item._id}
        />
    )

    return (
        // <div className="container" style={{flexDirection: `${flexDirection}`}}>
        <div className="container" style={{display: "flex", flexWrap: "wrap", flexDirection: `${flexDirection}`}}>
            {element}
        </div>
    )
}

export default List