import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { Link } from 'react-router-dom';

export default function Category() {
    const { userAxios, upVotePost, downVotePost, getAllPosts, allPosts, setAllPosts } = useContext(UserContext);
  
    console.log(allPosts)
    useEffect(() => {
      // Fetch all issues from the server
      getAllPosts()
    }, []);
  
    // Function to handle upvoting an issue
    const handleUpVote = (postId) => {
      upVotePost(postId)
    };
  
    // Function to handle downvoting an issue
    const handleDownVote = (postId) => {
      downVotePost(postId)
    };

    async function handleFilter(e) {
      try {
          if (e.target.value === "reset") {
              await getAllPosts();
              console.log(allPosts);
          } else {
              const response = await userAxios.get(`/api/post/search/category?category=${e.target.value}`);
              console.log(response.data);
              setAllPosts(response.data);
          }
      } catch (error) {
          console.log(error);
      }
  }
  
    return (
      <div className="category">
        <h1>Category</h1>
        <br></br>
            <select onChange={handleFilter} className="filter-form">
            <option value="reset">All Makeup items</option>
            <option value="Eyes">Eyes</option>
            <option value="Lips">lips</option>
            <option value="Cheeks">Cheeks</option>
            <option value="Face">Face</option>
            <option value="Makeup-tools">Makeup-tools</option>
            </select>
          <div>
          {allPosts && allPosts.map(post => (
                    <div key={post._id}>
                        <h3>{post.title}</h3>
                        <img src={post.imgUrl} width={300} />
                        <Link to={`/posts/${post._id}`}>
                          <button>Read more..</button>
                        </Link>
                    </div>
                ))}
          </div>
      </div>
    );
  }
  