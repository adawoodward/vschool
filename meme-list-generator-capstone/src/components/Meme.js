import React from "react"

export default function Meme() {
    const [userInput, setUserInput] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg"
    })
    const [randomImg, setRandomImg] = React.useState("")
    const [allMemes, setAllMemes] = React.useState([])
    const [generatedMemes, setGeneratedMemes] = React.useState([])
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
        // setRandomImg(randomUrl)
        console.log(randomUrl)
        console.log(randomImg.image)
        return (<img src={randomImg.image}/>)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            [name]: value
        }))
    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     setGeneratedMemes((prevGeneratedMemes) => {
    //         ...prevGeneratedMemes,
    //         topText: meme.topText,
    //         bottomText: meme.bottomText,
    //         image: meme.image
    //     })
    // }

    function handleSubmit(event) {
        event.preventDefault()

        setGeneratedMemes(prevGeneratedMemes=> {
            return [
                ...prevGeneratedMemes,
                <div className="memeGenarated">
                    <h2 className="memeTopText">{userInput.topText}</h2>
                    <h2 className="memeBottomText">{userInput.bottomText}</h2>
                    <img src={randomImg.image ? randomImg.image : userInput.image} />
                    <button type="button" className="delete" onClick={onDelete}>Delete</button>
                    {/* <button onClick={()=> this.removeItem(i)}>delete</button> */}
                    {/* <button onClick={()=>this.onDelete(generatedMemes.index)}
                    >Delete</button> */}
                    {/* <button onClick={() => deleteMeme(generatedMemes.index)} className="delete--button">DELETE</button> */}
                </div>
            ]

            // function deleteTodo(id){
            //     setTodos([...todos].filter(todo => todo.id !== id));
            // }

            // <button onClick={() => deleteTodo(todo.id)} className="x-button">

            // topText: userInput.topText,
            // bottomText: userInput.bottomText,
            // image: userInput.image
        })

        console.log(generatedMemes)

        const onDelete = index => {
            setGeneratedMemes([
                // ...generatedMemes.slice(0, index),
                // ...generatedMemes.slice(index + 1)
                ...generatedMemes.splice(index, 1)
            ])
        }

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
        // setList(prevList => [...prevList, {meme}])
    }

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
                    className="form--button"
                    // onClick={fetchRandomImg}
                >Submit</button>
            </form>
            {/* <div>
                <img src={randomImg.image} />
                <h2 className="meme--top">{userInput.topText}</h2>
                <h2 className="meme--bottom">{userInput.bottomText}</h2>
            </div> */}
            <div className="meme">
                <img src={randomImg.image ? randomImg.image : userInput.image} />
                {/* <img src={userInput.image} className="meme--img" /> */}
                <h2 className="meme--top">{userInput.topText}</h2>
                <h2 className="meme--bottom">{userInput.bottomText}</h2>
            </div>
            <h2>List of Memes</h2>
            <div>{generatedMemes}

            </div>
            {/* <div>{userMeme}</div> */}
        </main>
    )
}


// //- A user will see a meme image on page load
// //- A user can click "refresh meme image" to load a new one
// //- A user will be able to add created memes to a list
// //- A user will be able to delete memes from the list
// //- A user will be able to edit an existing meme

// import React from "react"

// export default function Meme() {
//     const [userInput, setUserInput] = React.useState({
//         topText: "",
//         bottomText: "",
//         image: ""
//     })

//     const [randomImg, setRandomImg] = React.useState("http://i.imgflip.com/1bij.jpg")
//     const [allMemes, setAllMemes] = React.useState([])
//     const [generatedMemes, setGeneratedMemes] = React.useState([])

//     React.useEffect(() => {
//         async function getMemes() {
//             const res = await fetch("https://api.imgflip.com/get_memes")
//             const data = await res.json()
//             setAllMemes(data.data.memes)
//         }
//         getMemes()
//     }, [])

//     function fetchRandomImg() {
//         const randomNum = Math.floor(Math.random() * allMemes.length)
//         const randomUrl = allMemes[randomNum].url

//         // setRandomImg(prevRandomImg => ({
//         //     ...prevRandomImg,
//         //     image: {url}
//         // }))

//         // setUserInput(prevUserInput => ({
//         //     ...prevUserInput,
//         //     image: url
//         // }))

//         // setRandomImg({image: url})

//         setRandomImg(randomUrl)

//         console.log(randomUrl)
//     }

//     function handleChange(event) {
//         const {name, value} = event.target
//         setUserInput(prevUserInput => ({
//             ...prevUserInput,
//             [name]: value
//         }))
//     }

//     function handleSubmit(event) {
//         event.preventDefault()
//         setGeneratedMemes(prevGeneratedMemes=> {
//             return [
//                 ...prevGeneratedMemes,
//                 <div>
//                     <h2>{userInput.topText}</h2>
//                     <h2>{userInput.bottomText}</h2>
//                     <img src={randomImg.image} />
//                 </div>
//             ]
//         })
//     }

//     console.log(generatedMemes)


//     return (
//         <main>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                     name="topText"
//                     value={generatedMemes.topText}
//                     onChange={handleChange}
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                     name="bottomText"
//                     value={generatedMemes.bottomText}
//                     onChange={handleChange}
//                 />
//                 <button onSubmit={fetchRandomImg}>Refresh</button>
//                 <button 
//                     className="form--button"
//                     type="submit"
//                 >Submit
//                 </button>
//                 <img src="http://i.imgflip.com/1bij.jpg"/>
//                 {/* <img src={randomImg} /> */}
//                 {/* <img src={generatedMemes.image} /> */}
//             </form>
//             <h2>List of Memes</h2>
//             <div>{generatedMemes}</div>
//         </main>
//     )


// }