import React from 'react' 
import {useNavigate, Link} from 'react-router-dom'; // p5 import Link
import productData from "./productData" //params 1

export default function Products() {

    const navigate = useNavigate() 
    
    const products = productData.map(product => (// params 2
      <h3 key={product._id}>  {/* params 3 */}
          <Link to={`/products/${product._id}`}>{product.name}</Link> - ${product.price}  {/* params 4 */}
      </h3> /* params 3 */
  )) /* params 2 */
    return (
      <div style={{ padding: 20 }}>
        <h2>Products - 2</h2>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
             dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

             <button onClick={()=> navigate("/checkout")}>Check Out</button>
             <button onClick={()=> navigate("/")}>Return to Home</button> 
             <button onClick={()=> navigate(1)}>Go Forward 1</button> 
             <button onClick={()=> navigate(-1)}>Go Back 1</button> 
              
             <div>
              <h1>Products List Page</h1>
              {products}
            </div>
      </div>
    );
  }