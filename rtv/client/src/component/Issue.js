import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Issue(props) {
    const { comments } = useContext(UserContext)
    const { _id } = props.Issue
    const { title, description, imgUrl } = props
    const filteredComments = comments.filter(comment => comment.issue === _id)
    return (
        <div className='issue'>
            <h1>{ title }</h1>
            <h3>{ description }</h3>
            <img src={imgUrl} alt={imgUrl} width={300}/>
            <p>{ filteredComments }</p>
        </div>
    )
}