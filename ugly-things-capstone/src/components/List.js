import React, {useContext} from "react"
import {Context} from '../Context'
import Edit from "../components/Edit"

export default function List() {
    const {list, deleteItem, handleEdit} = useContext(Context)

    const element = list.map(item =>
        <Edit
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            key={item._id}
            // id={item._id}
        />
    )

    return (
        <div>
            {element}
        </div>
    )
}