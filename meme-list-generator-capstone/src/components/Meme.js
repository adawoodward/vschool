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

    // const [showInputTop, setShowInputTop] = React.useState(false)
    
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

    function handleEditChange(e) {
        const {topText, bottomText} = e.target

        setCurrentMeme({
            ...currentMeme,
            topText: e.target.value,
            bottomText: e.target.value
        })
        // setCurrentMeme({[e.target.name]: e.target.value})
        // setCurrentMeme({...currentMeme, [name]: value})
        // setCurrentMeme({...currentMeme, topText: value, bottomText: value})

        console.log(currentMeme)
    }

    function handleEditClick(userInput) {
        setEditing(true)
        setCurrentMeme({...userInput})
    }

    function handleUpdate(id, updatedMeme) {
        const updatedItem = generatedMemes.map((meme) => {
            return meme.id === id ? updatedMeme : meme
        })
        setEditing(false)
        setGeneratedMemes(updatedItem)
        console.log(generatedMemes)
    }

    function handleEditSubmit(e) {
        e.preventDefault()
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

            <h2>List of Memes</h2>
            { editing ? (
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
                    <li>
                        <h2>{meme.topText}</h2>
                        <h2>{meme.bottomText}</h2>
                        <img src={meme.image} />
                        <button onClick={()=>removeImage(meme.id)}>Delete</button>
                        <button onClick={() =>handleEditClick(meme)}>Edit</button>
                    </li>
                )
            })}</ul>
        </main>
    )
}
