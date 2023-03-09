import React from 'react' //Step 1
import {useNavigate} from 'react-router-dom'; 

export default function About() {
  
  const navigate = useNavigate() 

  return (
      <div style={{ padding: 20 }}>
        <h2>About View</h2>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
             dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

             <button onClick={()=> navigate("/")}>Return to Home</button> 
             <button onClick={()=> navigate(-1)}>Go Back 1</button>  
             <button onClick={()=> navigate(1)}>Go Forward 1</button> 
      </div>
    );
  }