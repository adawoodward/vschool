import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function Read() {
    const [ApiData, setApiData] = useState([])
    React.useEffect(()=> {
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

    const deleteOne = (id) => {
        axios.delete(`https://api.vschool.io/ada/thing/${id}`)
            .then(response => console.log(response))
            .then(()=> {
                getData()
            })
            .catch(err=> console.log(err))
            const removed = ApiData.filter((item)=> {
                return item._id !== id
            })
            setApiData(removed)
            console.log('new array: ', removed)
            // setApiData(ApiData.filter(item => (item._id !== id)))
    }

    return (
        <div>
            {ApiData.map((data)=> {
                return (
                    <div key={data.id}>
                        <div>Title: {data.title}</div>
                        <div>Description: {data.description}</div>
                        <div>Img URL: {data.imgUrl}</div>
                        <button onClick={() => setData(data)}>Update</button>
                        <button onClick={() => deleteOne(data._id)}>Delete</button>

                    </div>
                )
            })}
        </div>
    )
}