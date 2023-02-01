import React from "react"

export default function Meme() {
    const [userInput, setUserInput] = React.useState({
        topText: "",
        bottomText: "",
        // image: ""
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

        console.log(randomUrl)
        // setRandomImg({
        //     image: randomUrl
        // })

        // setRandomImg(randomUrl)
        // console.log(randomUrl)
        setRandomImg(randomUrl)

        // setMeme(prevMeme => ({
        //     ...prevMeme,
        //     randomImage: url
        // }))
        console.log(randomUrl)
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
                <div className="memeImage">
                    <h2 className="memeTopText">{userInput.topText}</h2>
                    <h2 className="memeBottomText">{userInput.bottomText}</h2>
                    <img src={randomImg.valueOf} />
                    {/* <img src={userInput.image}></img> */}
                </div>
            ]
            // topText: userInput.topText,
            // bottomText: userInput.bottomText,
            // image: userInput.image
        })
        // setList(prevList => [...prevList, {meme}])
    }

    console.log(generatedMemes)
    // const userMeme = generatedMemes.map(meme => 
    //     <div>
    //         <h2>{generatedMemes.topText}</h2>
    //         <h2>{generatedMemes.bottomText}</h2>
    //         <img src={generatedMemes.image}></img>
    //     </div>
    // )


    // console.log(userMeme)


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
                    type="submit"
                    onSubmit={fetchRandomImg}>Get image</button>
                <button 
                    className="form--button"
                    // type="submit"
                    // onSubmit={fetchRandomImg}
                    onClick={fetchRandomImg}
                >Submit
                </button>
                {/* <img src="http://i.imgflip.com/1bij.jpg"></img> */}
                {/* <img src={randomImg} /> */}
                {/* <img src={generatedMemes.image} /> */}
            </form>
            <div className="meme">
                    <img src={userInput.image} className="memeImg" />
                        <h2 className="meme--top">{userInput.topText}</h2>
                        <h2 className="meme--bottom">{userInput.bottomText}</h2>
            </div>
            <h2>List of Memes</h2>
            <div>{generatedMemes}</div>
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