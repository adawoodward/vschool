import React from "react"
import uuid from 'react-uuid';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


export default function Meme() {
    const [userInput, setUserInput] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg"
    })
    const [randomImg, setRandomImg] = React.useState("")
    const [allMemes, setAllMemes] = React.useState([])
    // const [generatedMemes, setGeneratedMemes] = React.useState("")
    const [generatedMemes, setGeneratedMemes] = React.useState([])
    const [isEditing, setIsEditing] = React.useState(false)
    const [currentMeme, setCurrentMeme] = React.useState({})

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [userInput, generatedMemes])


    function fetchRandomImg() {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const randomUrl = allMemes[randomNum].url
        setRandomImg({
            image: randomUrl
        })
        // setRandomImg(randomUrl)
        console.log(randomUrl)
        console.log(randomImg.image)
        return (<img src={randomImg.image}/>)
    }
    console.log(generatedMemes)
    // console.log(randomImg.id)

    function handleChange(event) {
        const {name, value} = event.target
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            [name]: value
        }))
        console.log(userInput)
    }

    // const handleDelete = (index) => (e) => {
    //     // e.preventDefault()
    //     const {name, value} = e.target
    //     let index = generatedMemes.indexOf(e.target.value)
    //     if (index !== -1) {
    //         generatedMemes.splice(index, 1)
    //         setGeneratedMemes(generatedMemes)
    //     }
    //     console.log(generatedMemes)
    // }

    // const handleDelete = (event) => {
    //     const index = event.target.value
    //     // const item = this.state.generatedMemes[index]
    //     event.preventDefault()
    //     const updatedMemes = generatedMemes.splice(index, 1)
    //     setGeneratedMemes(updatedMemes)
    // }

    // const handleDelete = index => {
    //     generatedMemes.splice(index, 1)
    //     setGeneratedMemes([...generatedMemes])
    // }

    // const handleDelete = (generatedMemes) => {
    //     let updatedMemes = this.state.generatedMemes
    //     updatedMemes.splice(updatedMemes, 1)
    //     this.setState({updatedMemes})
    // }

    // function handleDelete(event) {
    //     // const index = event.target.value
    //     const index = generatedMemes.indexOf(event.target.value)
    //     const updatedGeneratedMemes = generatedMemes.map((meme) => {
    //         if (index !== -1) {
    //             generatedMemes.splice(index, 1)
    //             console.log(generatedMemes)
    //             return {...meme}
    //         } return meme
    //     })
    //     setGeneratedMemes(updatedGeneratedMemes)
    //     console.log(updatedGeneratedMemes)
    // }

    // function handleDelete(id) {
    //     const removeItem = generatedMemes.filter((meme) => {
    //         return generatedMemes.id !== id;
    //     })
    //     setGeneratedMemes(removeItem)
    // }

    // function handleUpdate(id, updatedGeneratedMemes) {
    //     const updatedMeme = generatedMemes.map((meme) => {
    //         return generatedMemes.id === id ? updatedMeme : meme
    //     })
    //     setIsEditing(false)
    // }

    // function handleEditSubmit(e) {
    //     e.preventDefault()
    //     handleUpdate(generatedMemes.id, generatedMemes)
    // }

    // const handleEdit = (index) => {
    //     const newEdits = [...generatedMemes]
    //     generatedMemes[index].topText = 'New Top Text'
    //     generatedMemes[index].bottomText = 'New Bottom Text'
    //     setGeneratedMemes(newEdits)
    // }
    
    // function handleEdit(id, newMeme) {
    //     const editedGeneratedMemes = generatedMemes.map((meme) => {
    //     // if this task has the same ID as the edited task
    //       if (id === meme.id) {
    //         //
    //         return {...meme, topText: newMeme, bottomText: newMeme}
    //       }
    //       return meme;
    //     });
    //     setGeneratedMemes(editedGeneratedMemes);
    // }


    // function handleSubmit(event) {
    //     event.preventDefault()
    //     setGeneratedMemes((prevGeneratedMemes) => {
    //         ...prevGeneratedMemes,
    //         topText: meme.topText,
    //         bottomText: meme.bottomText,
    //         image: meme.image
    //     })
    // }

    // function handleDeleteItem(index) {
    //     const list = generatedMemes.splice(index, 1)
    //     setGeneratedMemes(list)
    //     console.log(list)
    // }

    function removeImage(index) {
        let frontPart = generatedMemes.slice(0, index)
        let lastPart = generatedMemes.slice(index+1)
        let list = [...frontPart, ...lastPart]
        // setGeneratedMemes([...frontPart, ...lastPart])
        setGeneratedMemes(list)
        console.log(index)
        console.log(generatedMemes)
    }

    // const removeImage = (index) => {
    //     setGeneratedMemes(prevGeneratedMemes => ( 
    //         [
    //             ...prevGeneratedMemes.slice(0, index), 
    //             ...prevGeneratedMemes.slice(index+1)]
    //     ))
    //     console.log(index)
    //     console.log(generatedMemes)


    //     // const newArray = [...generatedMemes]
 
    //     // if (index > -1) {
    //     //     newArray.splice(index, 1)
    //     // }
    //     // // newArray.splice(index, 1)         
    //     // setGeneratedMemes(newArray)  
    //     // console.log(index)   
    //     // console.log('new array:', newArray)         
    // }

    function handleSubmit(event) {
        event.preventDefault()

        const topText = userInput.topText
        const bottomText = userInput.bottomText
        const image = randomImg.image ? randomImg.image: userInput.image
        const index = generatedMemes.indexOf()

        setGeneratedMemes(prevGeneratedMemes => [
            ...prevGeneratedMemes, 
            [
            <h2>{topText}</h2>,
            <h2>{bottomText}</h2>,
            <img src={image} />,
            <button onClick={() => removeImage(index)}>DELETE</button>
            // <button onClick={handleDelete}>Delete</button>
            // <button onClick={()=>handleDelete(generatedMemes.index)}>Delete</button>
            ]          
        ])
            // {   topText: topText,
            //     bottomText: bottomText,
            //     image: image
            // }

            // <div>
            //     <h2>{topText}</h2>
            //     <h2>{bottomText}</h2>
            //     <img src={randomImg.image ? randomImg.image: userInput.image} />
            //     <button onClick={()=>handleDelete(generatedMemes.id)}>Delete</button>
            // </div>
        // ]
        // )

        // setGeneratedMemes(prevGeneratedMemes => [
        //     ...prevGeneratedMemes, 
        //     generatedMemes])

        // setGeneratedMemes(prevGeneratedMemes => [
        //     ...prevGeneratedMemes, 
        //     {topText: topText,
        //     bottomText: bottomText,
        //     image: image
        // }])

        // setGeneratedMemes(prevGeneratedMemes => [...prevGeneratedMemes, [topText, bottomText, image]])
        // setGeneratedMemes(prevGeneratedMemes => [...prevGeneratedMemes, {userInput.topText, userInput.bottomText, randomImg.image ? randomImg.image : userInput.image}])
        // setList(prevList => [...prevList, {meme}])

        // setGeneratedMemes(prevGeneratedMemes=> [
        //         ...prevGeneratedMemes,
        //         <div className="memeGenarated" >
        //             <h2 className="memeTopText">{userInput.topText}</h2>
        //             {/* <button type="button" className="edit" onClick={handleEdit}>Edit</button> */}
        //             <h2 className="memeBottomText">{userInput.bottomText}</h2>
        //             <img src={randomImg.image ? randomImg.image : userInput.image} />
        //             <button onClick={()=>handleDelete(generatedMemes.id)}>Delete</button>

        //             {/* <button onClick={() => handleDelete}>Delete</button> */}
        //             {/* <span className="item-delete" onClick={this.handleDelete.bind(this, index)}> x </span> */}
        //             {/* <ul>{generatedMemes.map((meme) => (<li key={generatedMemes.id}>{generatedMemes.topText}
        //                 <button onClick={()=>handleDelete(generatedMemes.id)}>Delete</button>
        //                 </li>))}
        //             </ul> */}
        //             {/* <button type="button" onClick={removeItem}>delete</button> */}
        //             {/* <button type="button" onClick={toggleEditing}>{meme.isEditing ? "Save" : "Edit"}</button> */}
        //             {/* <button type="button" className="delete" onClick={handleDelete}>Delete</button> */}
        //             {/* <li key={index}>Edited</li> */}
        //             {/* <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li> */}
        //             {/* <button type="button" className="delete" onClick={onDelete}>Delete</button> */}
        //             {/* <button onClick={()=> this.removeItem(i)}>delete</button> */}
        //             {/* <button onClick={()=>this.onDelete(generatedMemes.index)}
        //             >Delete</button> */}
        //             {/* <button onClick={() => handleDelete(generatedMemes.index)} className="delete--button">DELETE</button> */}
        //         </div>
        //     ])

            // function deleteTodo(id){
            //     setTodos([...todos].filter(todo => todo.id !== id));
            // }

            // <button onClick={() => deleteTodo(todo.id)} className="x-button">

            // topText: userInput.topText,
            // bottomText: userInput.bottomText,
            // image: userInput.image
        // })

        console.log(generatedMemes)

        // const memes = generatedMemes.map(meme => {
        //     <div>
        //         <h3>{userInput.topText}</h3>
        //         <h3>{userInput.bottomText}</h3>
        //         <img src={randomImg.image ? randomImg.image : userInput.image} />
        //         <button onClick={()=>handleDelete(generatedMemes.index)}>Delete</button>
        //     </div>
        // })
    }

    // function handleDelete(index) {
    //     // setGeneratedMemes(prevGeneratedMemes => (
    //     //  [...prevGeneratedMemes.slice(0, index), ...prevGeneratedMemes.slice(index+1)]
    //     // ))
    //     const list = generatedMemes.splice(index, 1)
    //     setGeneratedMemes(list)
    //     console.log(generatedMemes)
    // }


    // const memes = () => (
    //     <div>
    //         <ul>{generatedMemes.map(meme => <li key={meme}>{meme}</li>)}</ul>
    //     </div>
    // )


        // function removeItem(index) {
        //     const list = this.state.generatedMemes
        //     list.splice(index, 1)
        //     setGeneratedMemes(list)
        // }

        // const onDelete = (index) => {
        //     console.log(index)
        //     // console.log('index to remove at: ', index)
        //     const slicedArray = generatedMemes.slice()
        //     const newMemesArray = slicedArray.splice(index, 1)
        //     setGeneratedMemes(newMemesArray)
        //     // [1, 2, 3]
        //     // setGeneratedMemes([
        //     //     ...generatedMemes.slice(0, index),
        //     //     ...generatedMemes.splice(index + 1, generatedMemes.length)
        //     //     // generatedMemes
        //     //     // ...generatedMemes.splice(index, 1)
        //     // ])
        // //    setGeneratedMemes([
        // //         ...generatedMemes.slice(0, index),
        // //         ...generatedMemes.slice(index + 1)
        // //     ]
        // //    )
        // }

        // setUserInput({
        //         topText: "",
        //         bottomText: "",
        //         image: ""
        //     }
        // )

        // setUserInput(prevUserInput => {
        //     return {
        //     topText: "",
        //     bottomText: "",
        //     }
        // })
    // }

    // removeItem(index) {
    //     const list = this.state.generatedMemes
    //     list.splice(index, 1)
    //     this.setGeneratedMemes({list})
    // }
    
    // const index = generatedMemes.indexOf()
    // if (index !== -1) {
    //     generatedMemes.splice(index, 1);
    //     this.setGeneratedMemes({memes: generatedMemes})
    // }

    // function deleteMeme(index){
    //     setGeneratedMemes([...generatedMemes].filter(meme => meme.indexOf !== index));
    // }

    // const userMeme = generatedMemes.map(meme => 
    //     <div>
    //         <h2>{generatedMemes.topText}</h2>
    //         <h2>{generatedMemes.bottomText}</h2>
    //         <img src={generatedMemes.image}></img>
    //     </div>
    // )
    function handleEditInputChange(e) {
        setCurrentMeme({...currentMeme, topText: e.target.value})
        console.log(currentMeme)
    }

    return (
        <main>
            {/* {isEditing ? (
                <form onSubmit={handleEditFormSubmit}>
                    <h2>Edit Todo</h2>
                    <label htmlFor="editTodo">Edit todo: </label>
                    <input
                        name="editTodo"
                        type="text"
                        placeholder="Edit todo"
                        value={currentMeme.text}
                        onChange={handleEditInputChange}
                    />
                <button type="submit">Update</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : ( */}
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
            {/* )} */}
            <div className="meme">
                <img src={randomImg.image ? randomImg.image : userInput.image} />
                <h2 className="meme--top">{userInput.topText}</h2>
                <h2 className="meme--bottom">{userInput.bottomText}</h2>
            </div>
            <h2>List of Memes</h2>
            <div>{generatedMemes}</div>
            {/* <ul>{generatedMemes.map((meme, index) => {
                return (
                    <li>
                        <h2>{userInput.topText}</h2>
                        <h2>{userInput.bottomText}</h2>
                        <img src={randomImg.image ? randomImg.image : userInput.image} />
                        <button onClick={()=>handleDelete(generatedMemes.index)}>Delete</button>
                    </li>
                )
            })}</ul> */}
            {/* <div>{meme}</div> */}
            {/* <div key={uuid()}>{generatedMemes}</div> */}
        </main>
    )
}