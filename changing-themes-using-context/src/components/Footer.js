import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Footer(props) {
    const {color} = useContext(ThemeContext)
    return (
        <p className={`${color}-theme`} style={{textAlign: 'center', backgroundColor: 'darkgray'}}>Copyright © Your Website 2022</p>
    )
}

export default Footer