import React from 'react' //Step 1
import { useNavigate } from "react-router-dom"

export default function Home() { //Step 2
  const navigate = useNavigate()

  return (//Step 3
      
      <div style={{ padding: 20 }}> {/*Step 4*/}
        
          <h2>Home View - 1</h2>{/*Step 5*/}
        { <p>Lorem ipsum dolor sit amet, consectetur adip.</p> } {/*Step 6*/}
        <button onClick={()=> navigate("/products")}>Go to Products page</button>
        <button onClick={()=> navigate(-1)}>Go Back 1</button>
        <button onClick={()=> navigate(1)}>Go Forward 1</button>
        <button onClick={()=> navigate(2)}>Go Forward 2</button>

      </div> //Step 4
    );// Step 3
  }// Step 2