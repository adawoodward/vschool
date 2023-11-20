import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import logo from '../assets/logo.png'
import yellowbanner from '../assets/yellowbanner.png'

const Hero = () => {
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
      {/* <h1>!!!!!!!!!!!HERO SECTION!!!!!!!!!!</h1> */}
      <img src={logo} className='logo'/>
      <img src={yellowbanner} className='banner'/>
      <h2>Join Our KoBeauty Club and Get all the real info you need for your shopping!</h2>
    </div>
  );
};

export default Hero;
