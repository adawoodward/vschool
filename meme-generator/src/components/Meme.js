// import React from "react"
// import memesData from "../memesData"

// export default function Meme() {
//     let url;

//     const [memeImage, setMemeImage] = React.useState("")

//     function getMemeImage() {
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMemeImage(memesArray[randomNumber].url)
//         // console.log(randomNumber)
//         // url = memesArray[randomNumber].url
//         // const {url} = memesArray[randomNumber]
//         // console.log(url)
//     }

//     return (
//         <main>
//             <p>{url}</p>
//             <div className="form">
//                 <input 
//                     type="text" 
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button className="form--button"
//                 onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <img src={memeImage} className="meme--image" />
//         </main>
//     )
// }

import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}

