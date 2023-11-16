import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { Link } from 'react-router-dom';


function Brand() {
  const { userAxios, getAllPosts, allPosts, setAllPosts } = useContext(UserContext);
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
      <h1>Brand</h1>
      <input
        type="text"
        placeholder="Search by brand..."
        onChange={handleBrandSearch}
        className="brand-search-input"
      />
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <div key={post._id}>
            {/* Render post details here */}
            <h3>{post.title}</h3>
            <h3>{post.category}</h3>
            {/* <h3>{post.description}</h3> */}
            <img src={post.imgUrl} width={300} />
            <Link to={`/posts/${post._id}`}>
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


// import React, { useContext, useEffect } from 'react';
// import { UserContext } from '../context/UserProvider';

// function Brand() {
//   const { userAxios, getAllPosts, allPosts, setAllPosts } = useContext(UserContext);

//   console.log(allPosts)
//   useEffect(() => {
//     // Fetch all issues from the server
//     getAllPosts()
//   }, []);

//   async function handleBrandSearch(e) {
//     try {
//       if (e.target.value === 'reset') {
//         await getAllPosts();
//       } else {
//         const response = await userAxios.get(`/api/post/search/brand?brand=${e.target.value}`);
//         setAllPosts(response.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="brand">
//       <h1>Brand</h1>
//       <input
//         type="text"
//         placeholder="Search by brand..."
//         onChange={handleBrandSearch}
//         className="brand-search-input"
//       />
//        {allPosts && allPosts.map(post => (
//                     <div key={post._id}>
//                         {/* Render post details here */}
//                         <p>{post.title}</p>
//                         {/* Add other post details as needed */}
//                     </div>
//                 ))}
//     </div>
//   );
// }

// export default Brand;
