import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col }) => {
    return (
        
        <div className="row justify-content-center align-items-center g-4">   
        <Link to={`/product/${product._id}`}>
        <div className="fadeInUp" data-wow-delay="0.4s">
     
        <div className="pricing-item">
		<div className="pricing-inner text-center">
          
        
                    <div className="pricing-content">
                        <h3 className="pricing-title">
                            {product.name}
                        </h3>
                       
                        <h3 className="pricing-price" style={{ fontSize: "1rem" }} >{product.description}</h3>
                        <h3 className="pricing-price" style={{ fontSize: "1rem" }}>EUR {product.price}</h3>
                        <Link to={`/product/${product._id}`}  className="lab-btn" style={{ color: "#14cc3c" }}>Details</Link>
                    </div>
                
        </div>
        </div>
        </div>
        </Link>
        </div>
        
        
    )
}

export default Product
