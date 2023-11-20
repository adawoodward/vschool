import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { Link } from 'react-router-dom';


function Brand() {
  const { userAxios, getAllPosts } = useContext(UserContext);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);  

  async function handleBrandSearch(e) {
    try {
      const brand = e.target.value.trim().toLowerCase(); // Trim the entered value
      if (brand === '') {
        setFilteredPosts([]); // If the input is empty, reset the filtered posts
      } else {
        const response = await userAxios.get(`/api/post/search/brand?brand=${brand}`);
        setFilteredPosts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="brand">
      <br></br>
      <h1>Brand</h1>
      <br></br>
      <input
        type="text"
        placeholder="Search by brand..."
        onChange={handleBrandSearch}
        className="brand-search-input"
      />
      <br></br>
      <br></br>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <div key={post._id} className='brand-item'>
            <h3>{post.title}</h3>
            <h3>Category: {post.category}</h3>
            {/* <h3>{post.description}</h3> */}
            <img src={post.imgUrl} width={300} />
            <Link to={`/post/${post._id}`}>
                <button>Read more..</button>
            </Link>
          </div>
        ))
      ) : (
        <p>No posts found for this brand.</p>
      )}
    </div>
  );
}

export default Brand;

