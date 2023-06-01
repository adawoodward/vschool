import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm"; // implement Movie component feature without having to build a whole another form because we can just import AddMovieForm

export default function Movie(props) {
    const { title, genre, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="movie">
            {/* <h1>Title: {props.title}</h1>  */}
            { !editToggle ?
            <>
                <h1>Title: {title}</h1> 
                <p>Genre: {genre}</p>
                {/* <p>Genre: {props.genre}</p> */}
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteMovie(_id)} >
                {/* pass in anonymouse function like "() =>", so that onClick will call this () first, then return props.deletemovie() function  */}
                    Delete
                </button>
                <button
                    className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)} >
                    Edit
                </button>
            </>
            :
            <>
            {/* using the same template and the same form with new functionality provided via props */}
                <AddMovieForm 
                    title={title}
                    genre={genre}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editMovie}
                />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
            </>
            }
            {/* what props does AddMovieForm need */}
        </div>
    )
}

// export default Movie