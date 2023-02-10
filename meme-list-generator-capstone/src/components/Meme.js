import React, {Component} from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// /* eslint-disable import/first */
// import { Component } from "react";
// import Edit from "./Edit"


export default function Meme() {
    const [userInput, setUserInput] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg",
        id: uuidv4(),
        // editing: false
    })
    const [randomImg, setRandomImg] = React.useState("")
    const [allMemes, setAllMemes] = React.useState([])
    const [generatedMemes, setGeneratedMemes] = React.useState([])
    const [editing, setEditing] = React.useState(false)
    const [currentMeme, setCurrentMeme] = React.useState({})
    // object state to set so we know which todo item we are editing

    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function fetchRandomImg() {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const randomUrl = allMemes[randomNum].url
        setRandomImg({
            image: randomUrl
        })
        console.log(randomUrl)
        console.log(randomImg.image)
        return (<img src={randomImg.image}/>)
    }
    console.log(generatedMemes)

    function handleChange(event) {
        const {name, value} = event.target

        setUserInput(prevUserInput => ({
            ...prevUserInput,
            [name]: value
        }))
        // console.log(userInput)
    }

    function removeImage(id) {
        const removeItem = generatedMemes.filter((meme) => {
            return meme.id !== id;
        })
        setGeneratedMemes(removeItem)
        console.log('new array:', removeItem)
    }

    // function to get the value of the edit input and set the new state
    function handleEditChange(e) {
        const name = e.target.name
        const value = e.target.value
        // set the new state value to what's currently in the edit input box
        setCurrentMeme({
            ...currentMeme,
            [name]: value
        })

        console.log(currentMeme)
    }

    // when a user clicks on the "Edit" button. I want the "Update" button and "Cancel" button, 
    // and change from the previous input to the editing input.
    // function to handle when the "Edit" button is clicked
    function handleEditClick(userInput) {
        setEditing(true)
        // set the currentMeme to the userInput's topText/bottomText that was clicked
        setCurrentMeme({...userInput})
    }


    // a function that we will call when the form is submitted.
    function handleUpdate(id, updatedMeme) {
        // here we are mapping over the generatedMemes array - 
        // the idea is check if the meme.id matches the id we pass into the function
        // if the id's match, use the second parameter to pass in the updated meme object
        // otherwise just use old meme
        const updatedItem = generatedMemes.map((meme) => {
            return meme.id === id ? updatedMeme : meme
        })
        // set editing to false because this function will be used inside a onSubmit function - 
        // which means the data was submited and we are no longer editing
        setEditing(false)
        // update the todos state with the updated todo
        setGeneratedMemes(updatedItem)
        console.log(generatedMemes)
    }

    // a function actually update the meme item when the form is submitted.
    function handleEditSubmit(e) {
        e.preventDefault()
        // call the handleUpdate function - passing the currentMeme.id and the currentMeme object as arguments
        handleUpdate(currentMeme.id, currentMeme)
        console.log(currentMeme)
        alert("Edited!")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const topText = userInput.topText
        const bottomText = userInput.bottomText

        // if (topText === "" || bottomText === "") {
        //     alert("Please add texts")
        //     return
        // }

        setGeneratedMemes((prevGeneratedMemes) => [...prevGeneratedMemes, {
            ...userInput,
            image: randomImg.image ? randomImg.image : userInput.image,
            id: uuidv4()
        }])

        console.log(generatedMemes)
        setUserInput({
            topText: "",
            bottomText: ""
        })
    }


    // // working wrong but closeset
    // const memesArr = Array.from(generatedMemes)
    // console.log(memesArr)
    // const mapped = memesArr.map((meme, id) => (
    //     <div key={id}>
    //         <h3>{userInput.topText}</h3>
    //         <h3>{userInput.bottomText}</h3>
    //         <img src={randomImg.image ? randomImg.image : userInput.image} />
    //         <button onClick={()=>removeImage(generatedMemes.id)}>Delete</button>
    //     </div>
    // ))

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={generatedMemes.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={generatedMemes.bottomText}
                    onChange={handleChange}
                />
                <button  
                    type="button"
                    onClick={fetchRandomImg}>Get image</button>
                <button
                    type="submit"
                    className="form--button">Submit</button>
            </form>

            <div className="meme">
                <img src={randomImg.image ? randomImg.image : userInput.image} />
                <h2 className="meme--top">{userInput.topText}</h2>
                <h2 className="meme--bottom">{userInput.bottomText}</h2>
            </div>
            <div className="list">
            <h2>List of Memes</h2>
            <br></br>
            {/* We need to conditionally render different inputs based on if we are in editing mode */}
            { editing ? (
            // if we are editing - display the edit todo input
            // add the handleEditFormSubmit function in the "onSubmit" prop
            <form onSubmit={handleEditSubmit} className="form--edit">
                <h3 style={{color: "blue"}}>Edit Mode On</h3>
                <input
                    autoFocus
                    type="text"
                    placeholder="Edit"
                    name="topText"
                    value={currentMeme.topText}
                    onChange={handleEditChange}
                    className="edit--top"
                />
                <input
                    autoFocus
                    type="text"
                    placeholder="Edit"
                    name="bottomText"
                    value={currentMeme.bottomText}
                    onChange={handleEditChange}
                    className="edit--bottom"
                />
                <button type="submit">Update</button>
                <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
            ) : "" }
            <ul>{generatedMemes.map((meme) => {
                return (
                    <li key={meme.id}>
                        <h2>{meme.topText}</h2>
                        <h2>{meme.bottomText}</h2>
                        <img src={meme.image} />
                        {/* we are passing the entire meme object to the handleEditClick function*/}
                        <button onClick={()=>removeImage(meme.id)}>Delete</button>
                        <button onClick={() =>handleEditClick(meme)}>Edit</button>
                    </li>
                )
            })}</ul>
            </div>
        </main>
    )
}
