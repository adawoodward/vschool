import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import CommentForm from './CommentForm'

const IssueDetail = () => {

    const { userAxios, comments, setComments, postNewComment } = useContext(UserContext)
    const { _id } = useParams()
    const [issueDetail, setIssueDetail] = useState({})
    const fetchIssue = () => {
        userAxios.get(`/api/issue/issues/${_id}`)
        .then((res) => {
            console.log(res.data)
            setIssueDetail(res.data)
            return res.status(200).json(res.data)
        })
        .catch(err => console.error(err.response))
    }

    useEffect(() => {
        fetchIssue()
        fetchComments()
    }, [])

    const fetchComments = () => {
       userAxios.get(`/api/comment/comments/${_id}`)
        .then((res) => {
            console.log(res.data)
            setComments(res.data)
        })
        .catch((err) => {
            console.log(err.response)
       })
    }

    // function postComment(newComment) {
    //     if (!_id) {
    //         console.error("Invalid issueId")
    //         return
    //     }
    //     postNewComment(newComment, _id)
    // }

    const filteredComments = Array.isArray(comments) ? comments.filter(comments => comments.issue == _id) : []

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
        <CommentForm disabled={!issueDetail.title} />
        <p>{filteredComments.map(comment => (
            <div key={comment._id}>
                {comment.text}
            </div>
        ))}</p>
        <br></br>
        </div>
        </>
    )
}

export default IssueDetail