import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const IssueDetail = () => {
    const { _id } = useParams()
    const [issueDetail, setIssueDetail] = useState({})
    const fetchIssue = () => {
        axios.get(`/issues/${_id}`)
        .then((res) => {
            console.log(res.data)
            setIssueDetail(res.data)
            return res.status(200).json(res.data)
        })
        .catch(err => console.error(err.response))
    }

    useEffect(() => {
        fetchIssue()
    }, [])

    return (
        <>
        <div className='detail-container'>
        <br></br>
        <h1>Detail Page</h1>
        <hr></hr>
        <br></br>
        <div>Title: {issueDetail?.title}</div>
        <div>Description: {issueDetail?.description}</div>
        <div>ImgUrl: {issueDetail?.imgUrl}</div>
        <div>Comment</div>
        <br></br>
        </div>
        </>
    )
}

export default IssueDetail