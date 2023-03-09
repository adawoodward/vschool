import React from "react"
import { useParams } from "react-router-dom" //params 1
import productData from "./productData" //params 3

function ProductDetails() {//had props in parameter
    const {productId} = useParams()//params 2
    const foundProduct = productData.find(product => product._id === productId)//params 4
    
    //console.log(useParams())
    //console.log(foundProduct)
    //console.log(productId)
    
    return (
        
        <div>
            <h1>Product Detail Page</h1> {/**params 5 */}
            <h3>{foundProduct.name} - ${foundProduct.price}</h3> {/**params 5 */}
            <p>{foundProduct.description}</p> {/**params 5 */}
        </div>
    )
}

export default ProductDetails