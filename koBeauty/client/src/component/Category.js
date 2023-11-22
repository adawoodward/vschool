import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import { Link } from 'react-router-dom';

export default function Category() {
    const { userAxios, getAllPosts, allPosts, setAllPosts } = useContext(UserContext);
  
    console.log(allPosts)
    useEffect(() => {
      getAllPosts()
    }, []);

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
      <div className="category-container">
        <br></br>
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
          <div className='category'>
          {allPosts && allPosts.map(post => (
                    <div key={post._id} className='category-item'>
                        <h3>{post.title}</h3>
                        <h3>{post.brand}</h3>
                        <img src={post.imgUrl} width={300} />
                        <br></br>
                        <Link to={`/post/${post._id}`}>
                          <button>Read more..</button>
                        </Link>
                    </div>
                ))}
          </div>
      </div>
    );
  }
  