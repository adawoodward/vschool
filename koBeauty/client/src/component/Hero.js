import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import PinkBrown from '../assets/PinkBrown.png'

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
      <img src={PinkBrown} className='pinkbrown'/>
      <div>
        <h3>Join Our KoBeauty Club and Get all the real info you need for your shopping!</h3>
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
