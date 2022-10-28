import React from "react"
import Navbar from "./Navbar"


export default function Header() {
    return (
        <div className="header">
            <Navbar />
            <h1 className="header--title">Clean Blog</h1>
            <h3 className="header--description">A Blog Theme by Start Bootstrap</h3>
        </div>
    )
}
