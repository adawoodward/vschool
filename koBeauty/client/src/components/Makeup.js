import React from 'react'
import { Link } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { Button } from 'react-bootstrap/lib/InputGroup'

export default function Makeup(props) {
    const { title, brand, category, _id } = props

    return (
        <div>
            <>
                <h1>{title}</h1>
                <h2>{brand}</h2>
                <h3>{category}</h3>
                <Link to={`/makeup/${_id}`}>
                <Button>CLICK</Button>
                </Link>
                
              
            </>
        </div>
    )
}