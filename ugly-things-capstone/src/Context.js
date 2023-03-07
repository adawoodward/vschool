import React, {useEffect, createContext, useState} from "react"
import Edit from "./components/Edit"
import axios from "axios"

const Context = React.createContext()

function ContextProvider(props) {
    const [flexDirection, setFlexDirection] = useState('row')
    const [width, setWidth] = useState('33.3%')

    const [newInput, setNewInput] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    const [list, setList] = useState([])

    // const [isEditing, setIsEditing] = useState(false)

    useEffect(()=> {
        getData()
    }, [])

    function getData() {
        axios.get(`https://api.vschool.io/ada/thing/`)
        .then((response)=>{
            console.log(response.data)
            setList(response.data)
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post(`https://api.vschool.io/ada/thing/`, uglyThing)
    //         .then(response => {
    //             setList(prevList => ([...prevList, uglyThing]))
    //             getData()
    //         })
    //         .catch(err => console.log(err))
        
    //     setUglyThing({
    //         title: "",
    //         description: "",
    //         imgUrl: ""
    //     })    
    // }

    function deleteItem(id) {
        console.log(list)
        axios.delete(`https://api.vschool.io/ada/thing/${id}`)
            .then(()=> setList(prevList => {
                return prevList.filter(item => item._id !== id)
            }))
    }
    
    // const handleChange = (e) => {
    //     const {name, value} = e.target
    //     set(prevList => ({...prevList, [name]: value}))
    // }

    // const toggleEdit = () => {
    //     setIsEditing(prevIsEditing => !prevIsEditing)        
    // }

    const handleEdit = (id) => {
        let update = {
            title: newInput.title,
            description: newInput.description,
            imgUrl: newInput.imgUrl
        }
        axios.put(`https://api.vschool.io/ada/thing/${id}`, update)
            .then(res => console.log(res.data))
        setList(prevList => prevList.map(item => (item._id === id ? {...item, title: newInput.title, description: newInput.description, imgUrl: newInput.imgUrl} : item)))
    }

    function postUglyThing(item) {
        axios.post(`https://api.vschool.io/ada/thing/`, item)
            .then(res => setList(prevList => ([...prevList, res.data])))
    }

    return (
        <Context.Provider
            label="flexDirection" 
            value={{
                list,
                setList,
                newInput, 
                setNewInput,
                deleteItem,
                handleEdit,
                postUglyThing,
                flexDirection: flexDirection,
                setFlexDirection,
                width: width
            }}
            // selectedValue={flexDirection}
            // setSelectedValue={setFlexDirection}
            // className={className}
            // style={{display: 'flex', flexDirection: 'row'}}
        >
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}