import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import CommentForm from './CommentForm';

export default function Issue(props) {
    // const { 
    //     user: { 
    //       username 
    //     }, 
    //     addIssue, 
    //     issues
    //   } = useContext(UserContext)

    const { comments, postNewComment } = useContext(UserContext);
    const { _id, title, description, imgUrl } = props;
    // Ensure comments is an array before filtering
    const filteredComments = Array.isArray(comments) ? comments.filter(comment => comment.issue === _id) : [];
    return (
        <div className='issue'>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <img src={imgUrl} alt={imgUrl} width={300} />
            <p>{filteredComments.map(comment => (
                <div key={comment._id}>
                    {comment.text}
                </div>
            ))}</p>
            <CommentForm postNewComment={postNewComment}/>
        </div>
    );
}

