import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';


const Hero = () => {
//   const [randomProducts, setRandomProducts] = useState([]);
  const { userAxios } = useContext(UserContext);


//   useEffect(() => {
//     // Fetch random products when the component mounts
//     userAxios.get('/api/post/random')
//       .then(res => {
//         setRandomProducts(res.data);
//       })
//       .catch(err => {
//         console.error('Error fetching random products:', err);
//       });
//   }, []);

  return (
    <div className="hero-container">
      <h1>!!!!!!!!!!!HERO SECTION!!!!!!!!!!</h1>
      <div>
        <h3>Join Our K-Beauty Club and Get all the info you need for shopping</h3>
      </div>
      {/* <div className="carousel">
        {randomProducts.map(product => (
          <div key={product._id}>
            <h2>{product.title}</h2>
            <img src={product.imgUrl} alt={product.title} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Hero;
