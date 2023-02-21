import React, {useContext} from "react"
import {ThemeContext} from './themeContext'

function Navbar(props) {
    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}-theme`} style={{backgroundColor: 'lightblue', textAlign: 'center'}}>
        <h1>Ada's vacation spots</h1>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        </div>

    )
}

export default Navbar