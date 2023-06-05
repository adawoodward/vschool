import React, { useState, useEffect } from "react"
import axios from 'axios'
import Movie from "./components/Movie.js"
import AddMovieForm from "./components/AddMovieForm.js"

export default function App() {
    const [movies, setMovies] = useState([])

    function getMovies() {
        axios.get("/movies")
        // .then(res => console.log(res))
        .then(res => setMovies(res.data))
        // .catch(err => console.log(err))
        .catch(err => console.log(err.response.data.errMsg))
    }

    // this is the function we need to have fired when submit happens
    function addMovie(newMovie) { // send this down as a prop to AddMovieForm so we can call it and pass the new movie object
        axios.post("/movies", newMovie)
            .then(res => {
                setMovies(prevMovies => [...prevMovies, res.data]) // going to maintain the initial objects and add our new one to the end // res.data means new movie
            })
            // .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    // function addMovie should immediately cause return to rerender the page
    useEffect(() => {
        getMovies()
    }, [])

    // useEffect(() => {
    //     axios.get("/movies")
    //         // .then(res => console.log(res))
    //         .then(res => setMovies(res.data))
    //         .catch(err => console.log(err))
    // }, [])
    // use useEffect for componentdidmount
    // to use useEffect as componentdidmount is to keep the dependency array in the second argument
    // if we keep second argument in an empty array, this will only fire the first time because it'll only refire if we have data in the array and it sees its change

    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
            // .then(res => console.log(res))
            .then(res => {
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
    }

    function editMovie(updates, movieId) {
        axios.put(`/movies/${movieId}`, updates)
            // .then(res => console.log(res))
            .then(res => {
                setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
            }) // just return the regular movie in the array, if its id is not equal to the movieId which passed in
            // that means it wasn't updated so just keep it
            // if (movie._id !== movieId) returns true, we are going to do this as a ternary
            // here res.data means updated movies
            .catch(err => console.log(err))
    }

    return (
        <div>
        <div className="movie-container">
            <AddMovieForm 
                // addMovie={addMovie}
                submit={addMovie}
                btnText="Add Movie"
            />
            { movies.map(movie => 
                <Movie 
                    {...movie} 
                    key={movie.title} 
                    deleteMovie={deleteMovie} 
                    editMovie={editMovie} />) } 
            {/* this to remap out our new movie */}
        </div>
        </div>
    )
}