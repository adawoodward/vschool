import React from "react"

export default function Info() {
    return (
        <div>
            <img className="photo" src="./assets/adaw.jpg" width="100px" />
            <h2 className="name">Ada (Wonyoung) Woodward</h2>
            <h4 className="job">Software Developer</h4>
            <h5 className="website">https://github.com/adawoodward</h5>
            <div className="buttons">
                <button className="email" type="button">&#128231; Email</button>
                <button className="linkedin" type="button"><img src="./assets/linkedin.png" width="12px" /> LinkedIn</button>
            </div>
        </div>
    )
}