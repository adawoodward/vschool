import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import StarRating from './StarRating'

const initInputs = {
    text: "",
    imgUrl: "",
    rating: 1 // Default rating value
}

export default function ReviewForm({ postId, postReview }) {
    const [inputs, setInputs] = useState(initInputs)
    const { user } = useContext(UserContext)

    function handleInputChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
      }

      function handleRatingChange(e) {
        const { value } = e.target;
        setInputs((prevInputs) => ({
          ...prevInputs,
          rating: parseInt(value), // Convert to integer
        }));
      }
    
      const handleReviewSubmit = (e) => {
        e.preventDefault();
        // const { text, imgUrl, rating } = inputs; // Destructure inputs
        if (text && user) {
          postReview({ text, imgUrl, rating, post: postId }); // Include rating in the postReview function
          setInputs(initInputs);
        }
      };

    const { text, rating, imgUrl } = inputs


    return (
      <div className='review-form'>
          <h3>Add a Review</h3>
          {user ? (
              <form onSubmit={handleReviewSubmit}>
                  <textarea
                      name="text"
                      value={text}
                      onChange={handleInputChange}
                      placeholder="Write your comment here"
                  />
                  <input 
                    type="text" 
                    name="imgUrl" 
                    value={imgUrl} 
                    onChange={handleInputChange} 
                    placeholder="ImageUrl here"/>
                  <br></br>
                  <br />
                  <label htmlFor="rating">Rating:</label>
                  <StarRating rating={rating} /> {/* Use the StarRating component */}
                  <select name="rating" value={rating} onChange={handleRatingChange}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                  ))}
                  </select>
                  <br></br>
                  <button type="submit">Submit Review</button>
              </form>
          ) : (
              <p>Please sign in to post a review.</p>
          )}
      </div>
  );
}