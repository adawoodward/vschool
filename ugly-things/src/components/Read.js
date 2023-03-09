import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Update from './Update'

export default function Read() {
    const [ApiData, setApiData] = useState([])
    useEffect(()=> {
        axios.get(`https://api.vschool.io/ada/thing/`)
            .then((response)=>{
                console.log(response.data)
                setApiData(response.data)
            })
    }, [])

    const setData = (data) => {
        let {id, title, description, imgUrl} = data
        localStorage.setItem('id', id)
        localStorage.setItem('title', title)
        localStorage.setItem('description', description)
        localStorage.setItem('img URL', imgUrl)
    }

    const getData = () => {
        axios.get(`https://api.vschool.io/ada/thing/`)
            .then((response)=> {
                console.log(getData.data)
                setApiData(getData.data)
        })
    }

    function deleteOne(id) {
        axios.delete(`https://api.vschool.io/ada/thing/${id}`)
            .then(()=> setApiData(prevData => {
                return prevData.filter(item => item._id !== id)
            }))
    }

    // const deleteOne = (id) => {
    //     axios.delete(`https://api.vschool.io/ada/thing/${id}`)
    //         .then(response => console.log(response))
    //         .then(()=> {
    //             getData()
    //         })
    //         .catch(err=> console.log(err))
    //         const removed = ApiData.filter((item)=> {
    //             return item._id !== id
    //         })
    //         // setApiData(prevApiData => ({
    //         //     ...prevApiData, removed
    //         // }))
    //         setApiData(removed)
    //         console.log('new array: ', removed)

    //         // setApiData(ApiData.filter(item => (item._id !== id)))
    // }

    return (
        <ul>
            {
                ApiData && ApiData.map(data=> (
                <li key={data._id}>
                    <div>Title: {data.title}</div>
                    <div>Description: {data.description}</div>
                    <div>Img URL: {data.imgUrl}</div>
                    <button onSubmit={() => setData(data)} >Update</button>
                    <button onClick={() => deleteOne(data._id)}>Delete</button>
                </li>
                ))
            }
        </ul>
    )
}