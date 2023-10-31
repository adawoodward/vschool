import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Link } from 'react-router-dom';


export default function Issue(props) {
    const { comments } = useContext(UserContext);
    const { issue } = props;
    const { title, description, imgUrl } = props;
    // const { _id } = useParams

    // Ensure that comments is an array before filtering
    const _id = issue ? issue._id : null;
    const filteredComments = Array.isArray(comments) ? comments.filter(comment => comment.issue === _id) : [];

    // Rest of your component code
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
        <Link to={`/issue/${_id}`}>
          <button>Detail</button>
        </Link>
        </div>
    )
}

// export default function Issue(props) {
//     const { comments } = useContext(UserContext); // Access comments from the context
//     const { _id } = props.issue; // Assuming you have an issue object

//     // Efficiently filter comments for the current issue
//     const filteredComments = comments.filter(comment => comment.issue === _id);
// }


// export default function Issue(props) {
//     const { comments, postNewComment } = useContext(UserContext);
//     const { _id, title, description, imgUrl } = props;
//     // Ensure comments is an array before filtering
//     const filteredComments = Array.isArray(comments) ? comments.filter(comment => comment.issue === _id) : [];
//     return (
//         <div className='issue'>
//             <h1>{title}</h1>
//             <h3>{description}</h3>
//             <img src={imgUrl} alt={imgUrl} width={300} />
//             {/* <p>{filteredComments.map(comment => (
//                 <div key={comment._id}>
//                     {comment.text}
//                 </div>
//             ))}</p> */}
//             <CommentForm postNewComment={postNewComment}/>
//         </div>
//     );
// }

