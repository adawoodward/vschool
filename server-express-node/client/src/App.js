import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function App() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("/movies")
            // .then(res => console.log(res))
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }, [])
    // use useEffect for componentdidmount
    // to use useEffect as componentdidmount is to keep the dependency array in the second argument
    // if we keep second argument in an empty array, this will only fire the first time because it'll only refire if we have data in the array and it sees its change
    return (
        <div>

        </div>
    )
}