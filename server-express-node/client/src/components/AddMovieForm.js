import React, { useState } from "react";

export default function AddMovieForm(props) {
    const initInputs = { title: props.title || "", genre: props.genre || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target 
        setInputs(prevInputs => ({...prevInputs, [name]: value})) // we want to make sure the previous inputs werent erased when this gets updated
    }
    // prevInputs returned to a new object that has everything which previous inputs had and then update the appropriate one with the appropriate value 
    // making sure "title" is maintained and then
    // "[name]: value" is updating the input with the named genre to the value that they are typing in it

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        // post request
        // props.addMovie(inputs) // pass in inputs which is our new movie object
        props.submit(inputs, props._id) // expect the submit function to send both inputs and props._id as its arguments. for more general usage (not for just adding movie). we could pass any function down and just refer to it as submit and then we change it so it'll also display button text as a prop as well
        setInputs(initInputs)
    } // when they click submit, handlechange will have made

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={inputs.title} 
                onChange={handleChange} 
                placeholder="Title" />
            <input 
                type="text" 
                name="genre" 
                value={inputs.genre} 
                onChange={handleChange} 
                placeholder="Genre" />
            {/* <button>Add Movie</button> */}
            <button>{ props.btnText }</button>
        </form>
    )
}