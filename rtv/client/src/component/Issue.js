import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Issue(props) {
    const { comments } = useContext(UserContext)
    const { _id } = props.Issue
    const filteredComments = comments.filter(comment => comment.issue === _id)
}