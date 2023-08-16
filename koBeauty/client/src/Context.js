import React, { useEffect, useState, createContext } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        getData()
    } , [])

    function getData() {
        axios.get("/makeup")
        .then(res => {
        console.log(res)
        setList(res.data)
        })
        .catch(err => console.log(err.response))
    }
    
    return (
        <Context.Provider
            value={{
                list,
                setList
            }}
        >
            {props.children}
        </Context.Provider>
    )
}