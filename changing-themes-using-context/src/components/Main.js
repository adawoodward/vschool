import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Main(props) {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}-theme`} style={{textAlign: 'center', marginTop: '-5px'}} >
            <h4>Click the button to toggle the {color} theme</h4>
        </div>
    )
}

export default Main